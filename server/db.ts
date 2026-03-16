import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'shop.db');

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const db = new Database(DB_PATH);

// Enable WAL for better concurrency
db.pragma('journal_mode = WAL');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id          TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    email       TEXT NOT NULL,
    phone       TEXT NOT NULL,
    address     TEXT NOT NULL,
    city        TEXT NOT NULL,
    province    TEXT NOT NULL,
    notes       TEXT DEFAULT '',
    items       TEXT NOT NULL,
    total       REAL NOT NULL,
    status      TEXT NOT NULL DEFAULT 'pending',
    created_at  TEXT NOT NULL
  );
`);

export interface OrderItem {
  seriesId?: string;
  seriesName: string;
  colorName: string;
  selectedLength: string;
  lengthLabel: string;
  selectedProfile?: string;
  quantity: number;
  pricePerPiece: number;
  subtotal: number;
}

export interface NewOrder {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  notes?: string;
  items: OrderItem[];
  total: number;
}

export interface Order extends NewOrder {
  id: string;
  status: string;
  createdAt: string;
}

function generateId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `IPO-${ts}-${rand}`;
}

const insertOrder = db.prepare(`
  INSERT INTO orders (id, customer_name, email, phone, address, city, province, notes, items, total, status, created_at)
  VALUES (@id, @customer_name, @email, @phone, @address, @city, @province, @notes, @items, @total, @status, @created_at)
`);

const selectOrder = db.prepare(`
  SELECT * FROM orders WHERE id = ?
`);

export function createOrder(data: NewOrder): Order {
  const id = generateId();
  const now = new Date().toISOString();

  insertOrder.run({
    id,
    customer_name: data.customerName,
    email: data.email,
    phone: data.phone,
    address: data.address,
    city: data.city,
    province: data.province,
    notes: data.notes ?? '',
    items: JSON.stringify(data.items),
    total: data.total,
    status: 'pending',
    created_at: now,
  });

  return {
    id,
    ...data,
    status: 'pending',
    createdAt: now,
  };
}

export function getOrderById(id: string): Order | null {
  const row = selectOrder.get(id) as Record<string, unknown> | undefined;
  if (!row) return null;

  return {
    id: row.id as string,
    customerName: row.customer_name as string,
    email: row.email as string,
    phone: row.phone as string,
    address: row.address as string,
    city: row.city as string,
    province: row.province as string,
    notes: row.notes as string,
    items: JSON.parse(row.items as string) as OrderItem[],
    total: row.total as number,
    status: row.status as string,
    createdAt: row.created_at as string,
  };
}

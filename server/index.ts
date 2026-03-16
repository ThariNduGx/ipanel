import express from 'express';
import path from 'path';
import { createOrder, getOrderById, NewOrder } from './db.js';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.use(express.json());

// CORS for development (Vite dev server on port 3000)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }
  next();
});

// ─── POST /api/orders ────────────────────────────────────────────────────────
app.post('/api/orders', (req, res) => {
  try {
    const body = req.body as Partial<NewOrder>;

    // Basic validation
    if (
      !body.customerName?.trim() ||
      !body.email?.trim() ||
      !body.phone?.trim() ||
      !body.address?.trim() ||
      !body.city?.trim() ||
      !body.province?.trim() ||
      !Array.isArray(body.items) ||
      body.items.length === 0 ||
      typeof body.total !== 'number'
    ) {
      res.status(400).json({ error: 'Missing required order fields.' });
      return;
    }

    const order = createOrder(body as NewOrder);
    res.status(201).json({ id: order.id, status: order.status });
  } catch (err) {
    console.error('[POST /api/orders]', err);
    res.status(500).json({ error: 'Failed to create order. Please try again.' });
  }
});

// ─── GET /api/orders/:id ─────────────────────────────────────────────────────
app.get('/api/orders/:id', (req, res) => {
  try {
    const order = getOrderById(req.params.id);
    if (!order) {
      res.status(404).json({ error: 'Order not found.' });
      return;
    }
    res.json(order);
  } catch (err) {
    console.error('[GET /api/orders/:id]', err);
    res.status(500).json({ error: 'Failed to retrieve order.' });
  }
});

// ─── Serve built frontend in production ──────────────────────────────────────
const DIST = path.join(process.cwd(), 'dist');
app.use(express.static(DIST));
app.get('*', (_req, res) => {
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[i-Panel API] Server running on http://localhost:${PORT}`);
});

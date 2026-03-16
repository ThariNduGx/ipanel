// ==========================================================
// i-Panel Shop Product Catalog
// Prices are in LKR per piece (indicative — update to match actual pricing).
// ==========================================================

export const COLOR_SWATCHES: Record<string, string> = {
  'Matt White':   '#F2F2F0',
  'Solid Fabric': '#D8D3CC',
  'Silver Line':  '#B0B0B0',
  'Black Line':   '#2A2A2A',
  'Gold Line':    '#C5A059',
  'White Wood':   '#EDE4D4',
  'Gray Wood':    '#909090',
  'Pine Wood':    '#C8A878',
  'Nadun':        '#A07840',
  'Rich Maple':   '#B87833',
  'Danish Teak':  '#8B6426',
  'Golden Teak':  '#C09050',
  'Teak':         '#7A5230',
  'Rich Teak':    '#6A4028',
  'Burma Teak':   '#5A3020',
  'Africa Teak':  '#4A2818',
  'Jack Wood':    '#3C2010',
  'Coffee Bean':  '#2A1408',
  'Kithul':       '#4A2814',
  'Kaluwara':     '#1E100A',
};

export type ColorCategory = 'Solids' | 'Metallics' | 'Woods';

export const COLOR_CATEGORIES: Record<string, ColorCategory> = {
  'Matt White':   'Solids',
  'Solid Fabric': 'Solids',
  'Black Line':   'Solids',
  'Silver Line':  'Metallics',
  'Gold Line':    'Metallics',
  'White Wood':   'Woods',
  'Gray Wood':    'Woods',
  'Pine Wood':    'Woods',
  'Nadun':        'Woods',
  'Rich Maple':   'Woods',
  'Danish Teak':  'Woods',
  'Golden Teak':  'Woods',
  'Teak':         'Woods',
  'Rich Teak':    'Woods',
  'Burma Teak':   'Woods',
  'Africa Teak':  'Woods',
  'Jack Wood':    'Woods',
  'Coffee Bean':  'Woods',
  'Kithul':       'Woods',
  'Kaluwara':     'Woods',
};

export type LengthOption = '305' | '366';
export type ProfileOption = 'A' | 'B' | 'C';

export interface LengthSpec {
  cm: LengthOption;
  label: string;
}

export interface ProfileSpec {
  id: ProfileOption;
  name: string;
  inch: string;
}

export interface SeriesSpec {
  id: string;
  name: string;
  tagline: string;
  warranty: string;
  width: string;
  thickness: string;
  weight: string;
  lengths: LengthSpec[];
  profiles?: ProfileSpec[];
  /** LKR per piece, keyed by length in cm */
  prices: Partial<Record<LengthOption, number>>;
  colors: string[];
}

export const SERIES: SeriesSpec[] = [
  {
    id: 'finishing',
    name: 'Finishing Series',
    tagline: 'Highest warranty. Finest profile detail.',
    warranty: '15 Years',
    width: '10 cm',
    thickness: '7.5 mm',
    weight: '0.09 Kg/Lft',
    lengths: [{ cm: '305', label: '305 cm (10 ft)' }],
    profiles: [
      { id: 'A', name: 'Profile A', inch: '4 inch' },
      { id: 'B', name: 'Profile B', inch: '2 inch' },
      { id: 'C', name: 'Profile C', inch: '3 inch' },
    ],
    prices: { '305': 3500 },
    colors: [
      'Matt White', 'Solid Fabric', 'Silver Line', 'Black Line',
      'Gold Line', 'White Wood', 'Gray Wood', 'Pine Wood',
      'Nadun', 'Rich Maple', 'Danish Teak', 'Golden Teak',
      'Teak', 'Rich Teak', 'Burma Teak', 'Africa Teak',
      'Jack Wood', 'Coffee Bean', 'Kithul', 'Kaluwara',
    ],
  },
  {
    id: 'lite',
    name: 'LITE Series',
    tagline: 'Wider panels. Faster coverage.',
    warranty: '5 Years',
    width: '30 cm',
    thickness: '7.5 mm',
    weight: '0.270 Kg/Lft',
    lengths: [
      { cm: '305', label: '305 cm (10 ft)' },
      { cm: '366', label: '366 cm (12 ft)' },
    ],
    prices: { '305': 2800, '366': 3200 },
    colors: [
      'Matt White', 'Solid Fabric', 'Silver Line', 'Black Line',
      'Gold Line', 'White Wood', 'Gray Wood', 'Pine Wood',
      'Nadun', 'Kithul', 'Danish Teak', 'Teak',
      'Rich Teak', 'Burma Teak', 'Africa Teak', 'Kaluwara',
    ],
  },
  {
    id: 'heavy-b',
    name: 'HEAVY B Series',
    tagline: 'Elegant ceiling patterns. Designer profile.',
    warranty: '10 Years',
    width: '20 cm',
    thickness: '7.5 mm',
    weight: '0.180 Kg/Lft',
    lengths: [
      { cm: '305', label: '305 cm (10 ft)' },
      { cm: '366', label: '366 cm (12 ft)' },
    ],
    prices: { '305': 3200, '366': 3700 },
    colors: [
      'Matt White', 'Solid Fabric', 'Silver Line', 'Black Line',
      'Gold Line', 'White Wood', 'Gray Wood', 'Pine Wood',
      'Nadun', 'Rich Maple', 'Danish Teak', 'Golden Teak',
      'Teak', 'Rich Teak', 'Burma Teak', 'Africa Teak',
      'Jack Wood', 'Coffee Bean', 'Kithul', 'Kaluwara',
    ],
  },
  {
    id: 'i-series',
    name: 'i Series',
    tagline: 'Premium flat finish. Seamless modern interiors.',
    warranty: '10 Years',
    width: '20 cm',
    thickness: '7.5 mm',
    weight: '0.180 Kg/Lft',
    lengths: [
      { cm: '305', label: '305 cm (10 ft)' },
      { cm: '366', label: '366 cm (12 ft)' },
    ],
    prices: { '305': 3400, '366': 3900 },
    colors: [
      'Matt White', 'Solid Fabric', 'White Wood', 'Gray Wood',
      'Pine Wood', 'Rich Maple', 'Nadun', 'Golden Teak',
      'Teak', 'Burma Teak', 'Africa Teak',
      'Jack Wood', 'Kithul', 'Kaluwara', 'Danish Teak',
    ],
  },
];

export function getSeriesById(id: string): SeriesSpec | undefined {
  return SERIES.find((s) => s.id === id);
}

export function formatPrice(amount: number): string {
  return `LKR ${amount.toLocaleString('en-LK')}`;
}

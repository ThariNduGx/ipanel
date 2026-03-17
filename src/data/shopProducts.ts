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

/** Available panel lengths in cm */
export type LengthOption = '122' | '305' | '366';
export type ProfileOption = 'A' | 'B' | 'C';

export interface LengthSpec {
  cm: LengthOption;
  label: string;
}

export interface ProfileSpec {
  id: ProfileOption;
  name: string;
  /** Profile dimension ratio, e.g. "4\":4\"" */
  shape: string;
}

export interface SeriesSpec {
  id: string;
  name: string;
  subtitle: string;
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
  /**
   * Coverage area in m² per panel, keyed by length in cm.
   * Null for Finishing Series — profiles use a perimeter formula, not area.
   * Calculator formula for panels: Math.ceil((roomLength * roomWidth) / coverage * 1.10)
   * Calculator formula for profiles: Math.ceil((2 * (roomLength + roomWidth)) / 1.22 * 1.05)
   */
  coveragePerPanel: Partial<Record<LengthOption, number | null>>;
}

export const SERIES: SeriesSpec[] = [
  {
    id: 'finishing',
    name: 'Finishing Series',
    subtitle: 'The Ultimate Foundation of Luxury',
    tagline: '15-year warranty. Three distinct profile shapes.',
    warranty: '15 Years',
    width: '10 cm (±5 mm)',
    thickness: '7.5 mm (±0.2 mm)',
    weight: '0.09 Kg/Lft (±0.05 kg)',
    lengths: [{ cm: '122', label: '122 cm (4 ft)' }],
    profiles: [
      {
        id: 'A',
        name: 'Profile A',
        shape: '4" × 4"',
        // Equal coverage on ceiling and wall face. For large rooms, high ceilings, feature installations.
      },
      {
        id: 'B',
        name: 'Profile B',
        shape: '2" × 2"',
        // Equal coverage. Standard residential — most widely specified profile in the range.
      },
      {
        id: 'C',
        name: 'Profile C',
        shape: '3" × 1"',
        // ASYMMETRIC — 3" on ceiling face, 1" on wall face. The only non-square profile in the range.
        // For installations where wall intrusion must be minimal.
      },
    ],
    prices: { '122': 1400 },
    coveragePerPanel: { '122': null }, // profiles use perimeter formula — see interface docs
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
    subtitle: 'Refined Simplicity, Trusted Performance',
    tagline: 'Project-focused. Wider panels, faster coverage.',
    warranty: '5 Years',
    width: '30 cm (±5 mm)',
    thickness: '7.5 mm (±0.2 mm)',
    weight: '0.270 Kg/Lft (±0.1 kg)',
    lengths: [
      { cm: '305', label: '305 cm (10 ft)' },
      { cm: '366', label: '366 cm (12 ft)' },
    ],
    prices: { '305': 2800, '366': 3200 },
    coveragePerPanel: { '305': 0.915, '366': 1.098 },
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
    subtitle: 'Enhanced Profile Design for Elegant Ceiling Patterns',
    tagline: 'Designer profile. Architectural shadow lines.',
    warranty: '10 Years',
    width: '20 cm (±5 mm)',
    thickness: '7.5 mm (±0.2 mm)',
    weight: '0.180 Kg/Lft (±0.1 kg)',
    lengths: [
      { cm: '305', label: '305 cm (10 ft)' },
      { cm: '366', label: '366 cm (12 ft)' },
    ],
    prices: { '305': 3200, '366': 3700 },
    coveragePerPanel: { '305': 0.61, '366': 0.732 },
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
    subtitle: 'Premium Flat Finish for Modern Interiors',
    tagline: 'Architectural flat. Seamless transitions.',
    warranty: '10 Years',
    width: '20 cm (±5 mm)',
    thickness: '7.5 mm (±0.2 mm)',
    weight: '0.180 Kg/Lft (±0.1 kg)',
    lengths: [
      { cm: '305', label: '305 cm (10 ft)' },
      { cm: '366', label: '366 cm (12 ft)' },
    ],
    prices: { '305': 3400, '366': 3900 },
    coveragePerPanel: { '305': 0.61, '366': 0.732 },
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

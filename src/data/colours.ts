export interface ColourSpec {
  slug: string;
  name: string;
  series: 'lite' | 'heavy-b' | 'heavy-f' | 'wall-cladding';
  seriesLabel: string;
  finish: string;
  description: string;
  image: string;
  images?: string[];
  thumbnailBg: string;
  coordinates: string[];
  techSpecs: {
    thickness: string;
    width: string;
    length: string;
    warranty: string;
    coating: string;
    fireRating: string;
    moistureResistance: string;
    uvIndex: string;
  };
}

export const allColours: ColourSpec[] = [
  // LITE Series (12 colours)
  {
    slug: 'kaluwara',
    name: 'Kaluwara',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Deep Ebony Wood Grain',
    description:
      'Kaluwara draws its name from the ancient Sinhalese word for ebony, the rarest and most prized timber in the South Asian subcontinent. Under natural daylight, the finish reveals a cool, almost graphite depth accented by fine silver-grey grain lines that give the surface a handcrafted quality no genuine timber can replicate at scale. As afternoon light shifts to warm incandescent tones in the evening, Kaluwara transitions to a richer espresso warmth, creating a living, breathing surface that changes character throughout the day. The UV-stabilised coating locks this tonal depth against fading for over a decade of coastal and inland service. Architects consistently specify Kaluwara for boardrooms and master suites where authority and understated luxury must coexist in equal measure.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#2C2017',
    coordinates: ['africa-teak', 'wenge', 'mahogany'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'africa-teak',
    name: 'Africa Teak',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Warm Golden Teak Grain',
    description:
      'Africa Teak captures the luminous warmth of sub-Saharan teak logged at peak maturity, where the grain interlocks in a cathedral pattern that draws the eye upward across a full ceiling span. Under morning light, the surface radiates a honeyed amber that feels as though the wood has been seasoned by equatorial sun for decades. In the evening, under warm LED downlights, Africa Teak deepens into a burnished caramel that brings an unmistakable residential luxury to hospitality lobbies, reception halls, and master living areas. The proprietary UV-stabilised laminate preserves this caramel depth against the intensity of Sri Lankan coastal UV radiation. Specification architects find Africa Teak indispensable where a space must communicate warmth, heritage, and permanence simultaneously.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#7B4F2A',
    coordinates: ['kaluwara', 'golden-teak', 'cedar-spice'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'natural-oak',
    name: 'Natural Oak',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Pale Nordic Oak Grain',
    description:
      'Natural Oak translates the clean, Nordic oak aesthetic into a PVC substrate engineered for tropical climates. The pale straw ground is bisected by delicate linear grain that communicates Scandinavian restraint without the humidity sensitivity of genuine oak. Under diffused natural light, the surface achieves a near-neutral tone that acts as an architectural backdrop, allowing furnishings and artwork to lead. Under evening downlights, subtle undertones of pearl emerge, elevating the ordinary ceiling plane into a considered design element. The UV laminate prevents yellowing typical of untreated oak, ensuring the specification reads as fresh in year twelve as it does on day one.',
    image:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#C8AE7D',
    coordinates: ['maple-cream', 'pine-natural', 'driftwood'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'golden-teak',
    name: 'Golden Teak',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Rich Satin Teak',
    description:
      'Golden Teak references the most prized grade of plantation teak, where the grain runs in long, uninterrupted parallels that suggest structural confidence. The gold-amber base carries a satin sheen that distinguishes it from the matte finishes in the LITE range and positions it firmly in the premium hospitality market. Its tonal warmth is broad enough to bridge both contemporary minimalism and traditional residential contexts, making it the most specified finish in the LITE collection by volume.',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#9B6B28',
    coordinates: ['africa-teak', 'mahogany', 'cedar-spice'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'walnut-brown',
    name: 'Walnut Brown',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Deep American Walnut',
    description:
      'Walnut Brown reproduces the cross-grain complexity of American black walnut with an accuracy that rewards close architectural inspection. The cool brown base is shot through with darker figure lines that give the finish a three-dimensional quality rarely achieved in surface-applied laminates. It is the preferred finish for executive office ceilings and private library installations where intellectual gravitas is a design brief requirement.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#4A3020',
    coordinates: ['wenge', 'kaluwara', 'mahogany'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'cherry-blossom',
    name: 'Cherry Blossom',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Rosé Cherry Grain',
    description:
      'Cherry Blossom interprets the delicate pink-red warmth of Japanese cherry timber at the height of its seasoning. The finish is feminine without being delicate, carrying enough mid-tone depth to work in contemporary residential bedrooms and boutique hotel suites where a blush warmth is desired without the softness of pink pigment.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#9B5B4A',
    coordinates: ['natural-oak', 'maple-cream', 'driftwood'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'wenge',
    name: 'Wenge',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Near-Black Tropical Grain',
    description:
      'Wenge reproduces the near-black depth of the Central African hardwood with its signature pale interlocked grain streak that cuts across the dark chocolate ground. It is the most dramatic finish in the LITE collection and is consistently paired with polished concrete floors and white walls in high-contrast contemporary interiors.',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#1A1008',
    coordinates: ['kaluwara', 'walnut-brown', 'mahogany'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'maple-cream',
    name: 'Maple Cream',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Light Cream Maple',
    description:
      'Maple Cream is the most neutral wood grain in the LITE collection, its off-white ground carrying only the faintest suggestion of grain movement. It is specified where maximum light reflection is a priority, in healthcare corridors, educational facilities, and light-filled residential kitchens where the ceiling must amplify natural illumination rather than absorb it.',
    image:
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#E8D9C0',
    coordinates: ['natural-oak', 'pine-natural', 'cherry-blossom'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'cedar-spice',
    name: 'Cedar Spice',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Warm Rustic Cedar',
    description:
      'Cedar Spice captures the aromatic warmth of old-growth cedar with its characteristic knotted grain and reddish-brown colour. The rustic quality of this finish makes it the preferred choice for spa interiors, ayurvedic wellness centres, and residential entertainment rooms where an organic, grounding atmosphere is the primary design intent.',
    image:
      'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#7B3A1C',
    coordinates: ['africa-teak', 'golden-teak', 'pine-natural'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'pine-natural',
    name: 'Pine Natural',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Pale Knotted Pine',
    description:
      'Pine Natural references the characteristic pale cream-yellow of Scandinavian pine with its open, widely spaced knots. The finish is cheerful and energetic, making it particularly well-suited to children\'s playrooms, beach house interiors, and casual dining areas where a relaxed, unpretentious mood is the design objective.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#D4B896',
    coordinates: ['maple-cream', 'natural-oak', 'driftwood'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'mahogany',
    name: 'Mahogany',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Classic Red Mahogany',
    description:
      'Mahogany returns the most storied timber species in colonial furniture-making to the architectural ceiling plane. The deep red-brown base with its fine, regular grain communicates institutional confidence and traditional craftsmanship. It is routinely specified for law firm reception areas, private banking suites, and historic building restorations where a contemporary material must evoke a heritage mood.',
    image:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#5C2218',
    coordinates: ['kaluwara', 'wenge', 'walnut-brown'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'driftwood',
    name: 'Driftwood',
    series: 'lite',
    seriesLabel: 'i-Panel LITE',
    finish: 'Weathered Grey Timber',
    description:
      'Driftwood references the silver-grey patina of timber aged by seawater and ocean winds. The cool greige ground carries a subtle variation that prevents it from reading as flat or clinical. It bridges the boundary between wood and stone and is the most versatile transitional finish in the LITE range, moving comfortably between coastal villa bedrooms and urban apartment living areas.',
    image:
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#9A9488',
    coordinates: ['natural-oak', 'pine-natural', 'maple-cream'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '3000mm / 4000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },

  // HEAVY-B Series (12 colours)
  {
    slug: 'storm-grey',
    name: 'Storm Grey',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Industrial Bevelled Stone',
    description:
      'Storm Grey is the definitive industrial-minimalist finish in the HEAVY-B collection. Its cool medium-grey ground, delivered through a precision-bevelled profile, creates a ceiling plane that reads as architectural structure rather than surface decoration. Under artificial lighting, the bevelled channel casts a continuous shadow line that elevates the domestic ceiling into a considered structural grid. Specified extensively in commercial loft conversions and high-end residential open-plan living areas across Colombo.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#7A8490',
    coordinates: ['charcoal-mist', 'arctic-slate', 'smoke-ash'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'pearl-white',
    name: 'Pearl White',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Lustrous Bevelled White',
    description:
      'Pearl White is the highest-specification white finish in the i-Panel portfolio. The subtle pearl tinting agent warms the base white by less than 2%, creating a surface that reads as pure white under daylight but introduces a barely perceptible warmth under incandescent and warm LED sources. The bevelled profile adds shadow definition that prevents the white ceiling from reading as flat or institutional.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F0EDE8',
    coordinates: ['ivory-marble', 'linen-white', 'silver-birch'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'smoke-ash',
    name: 'Smoke Ash',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Warm Ash Grey Bevel',
    description:
      'Smoke Ash sits precisely at the intersection of warm grey and cool grey, a tonal position that gives it exceptional versatility across different artificial lighting conditions. Under cool white LED, it reads as a sophisticated mid-grey. Under warm incandescent sources, it shifts perceptibly toward a greige that bridges the gap between stone and timber aesthetics.',
    image:
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#8D8A85',
    coordinates: ['storm-grey', 'charcoal-mist', 'warm-taupe'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'concrete-loft',
    name: 'Concrete Loft',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Raw Concrete Texture Bevel',
    description:
      'Concrete Loft brings the tactile quality of cast-in-place architectural concrete to the suspended ceiling plane at a fraction of the cost and without the structural loading implications. The finish replicates the characteristic form-tie marks and pour lines of poured concrete in fine photographic detail, creating a brutalist aesthetic that has become the dominant specification in Sri Lanka\'s emerging co-working and creative office sector.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#A0A0A0',
    coordinates: ['storm-grey', 'charcoal-mist', 'arctic-slate'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'charcoal-mist',
    name: 'Charcoal Mist',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Deep Charcoal Bevel',
    description:
      'Charcoal Mist is the darkest solid colour in the HEAVY-B collection and is reserved for high-drama architectural applications where the ceiling plane must compete with its surroundings. In restaurant and bar interiors under directional spot lighting, the deep charcoal ground absorbs ambient light while the bevelled profile creates a field of precise shadow lines that read as three-dimensional architectural coffering.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#3A3E42',
    coordinates: ['storm-grey', 'smoke-ash', 'concrete-loft'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'arctic-slate',
    name: 'Arctic Slate',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Cool Blue-Grey Bevel',
    description:
      'Arctic Slate introduces a controlled blue-grey undertone that distinguishes it from the neutral greys in the HEAVY-B range. The blue undertone is most pronounced under cool daylight conditions and recedes under warm evening lighting, giving the finish a dynamic quality that rewards architectural photography and social media documentation.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#7A8A9A',
    coordinates: ['storm-grey', 'smoke-ash', 'silver-birch'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'sandstone-beige',
    name: 'Sandstone Beige',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Warm Desert Sand Bevel',
    description:
      'Sandstone Beige reinterprets the warm ochre-beige of desert sandstone formations, a tonal register that pairs exceptionally well with terracotta, raw linen, and warm timber furniture. Its warmth and natural-material reference make it the preferred HEAVY-B finish for residential living areas and boutique hotel lobbies targeting an organic, earth-toned aesthetic.',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#C5AA80',
    coordinates: ['warm-taupe', 'ivory-marble', 'linen-white'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'ivory-marble',
    name: 'Ivory Marble',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Warm Ivory Stone Bevel',
    description:
      'Ivory Marble sits one tone step warmer than Pearl White, introducing a cream-ivory base that reads as naturally aged stone. It is the most residential of the HEAVY-B solid colours and is specified where the whiteness of Pearl White would appear clinical or the warmth of Sandstone Beige would appear too rustic.',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b62ccd4?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#EAE4D8',
    coordinates: ['pearl-white', 'linen-white', 'sandstone-beige'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'warm-taupe',
    name: 'Warm Taupe',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Greige Bevel Tone',
    description:
      'Warm Taupe occupies the sought-after greige zone between grey and beige. It is the most specified HEAVY-B finish by total installed area because its tonal neutrality allows it to read correctly under virtually any lighting condition in any interior context. Design professionals trust Warm Taupe as a failsafe specification that will always satisfy a client brief without creative risk.',
    image:
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#B8AC9C',
    coordinates: ['smoke-ash', 'sandstone-beige', 'ivory-marble'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'fossil-grey',
    name: 'Fossil Grey',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Aged Stone Bevel',
    description:
      'Fossil Grey references the warm, slightly mottled surface of ancient limestone formations where mineral deposits have created tonal variation across a generally grey ground. The finish has an aged quality that contrasts deliberately with the precision of the bevelled profile, creating a productive tension between natural and manufactured that appeals to architects working in the luxury residential sector.',
    image:
      'https://images.unsplash.com/photo-1603512500383-814f2e852c06?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#908C85',
    coordinates: ['storm-grey', 'warm-taupe', 'smoke-ash'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'linen-white',
    name: 'Linen White',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Natural Linen Bevel',
    description:
      'Linen White combines the purity of white with the organic quality of natural linen, introducing the faintest warm undertone that prevents it from reading as stark or clinical. It is the standard specification for residential master bedrooms and ensuite bathrooms where the ceiling must contribute to an atmosphere of restful calm without becoming a visual statement in its own right.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F5F0E8',
    coordinates: ['pearl-white', 'ivory-marble', 'warm-taupe'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'silver-birch',
    name: 'Silver Birch',
    series: 'heavy-b',
    seriesLabel: 'i-Panel HEAVY-B',
    finish: 'Cool Silver Tone Bevel',
    description:
      'Silver Birch introduces a cool, almost metallic grey-white that references the distinctive bark of northern European birch trees. Its slight luminance makes it particularly effective in lower-light interior spaces where a standard grey would read as heavy or oppressive. Interior architects specify Silver Birch for basement conversions and north-facing rooms where reflected light is a premium commodity.',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#D0D5D8',
    coordinates: ['arctic-slate', 'linen-white', 'pearl-white'],
    techSpecs: {
      thickness: '7.5mm',
      width: '200mm',
      length: '3000mm / 4000mm',
      warranty: '15 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.22mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },

  // HEAVY-F Series (12 colours)
  {
    slug: 'pure-white',
    name: 'Pure White',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Flat Bright White',
    description:
      'Pure White in the HEAVY-F flat profile is the benchmark by which every white ceiling finish is measured. Calibrated to reflect approximately 90% of incident light, it is the preferred specification for retail environments, healthcare facilities, and any space where illumination efficiency has a direct operational cost implication. Its absolute neutrality is both its strength and its architectural limitation.',
    image:
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e4?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#FFFFFF',
    coordinates: ['bright-white', 'cream-satin', 'dove-grey'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'bright-white',
    name: 'Bright White',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'High-Gloss Flat White',
    description:
      'Bright White adds a controlled gloss level to the flat profile, increasing surface luminance to create a ceiling that actively bounces directional light across a room. The gloss element also makes Bright White the most resistant to surface marking and the easiest to clean in the HEAVY-F range, making it the standard specification for commercial kitchens and food preparation areas.',
    image:
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F8F8F8',
    coordinates: ['pure-white', 'off-white', 'cream-satin'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised High-Gloss PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'cream-satin',
    name: 'Cream Satin',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Warm Cream Satin Flat',
    description:
      'Cream Satin is the best-selling finish in the HEAVY-F range. Its warm cream ground with a soft satin sheen translates the quality of a professionally painted residential ceiling into a maintenance-free UPVC panel at a fraction of the long-term cost. The satin sheen is calibrated to prevent harsh light reflections while maintaining the premium surface quality that residential clients expect.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F5EFDF',
    coordinates: ['pure-white', 'off-white', 'titanium-white'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Satin PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'off-white',
    name: 'Off White',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Warm Off-White Flat',
    description:
      'Off White sits between the absolute white of Pure White and the creamier warmth of Cream Satin, a tonal position that allows it to coordinate naturally with a wider range of interior colour schemes. It is the specification of choice for architects who want the brightness of a white ceiling without the stark coldness that pure white can introduce under cool lighting conditions.',
    image:
      'https://images.unsplash.com/photo-1556784344-ad913c73cfc4?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F2ECE0',
    coordinates: ['cream-satin', 'pure-white', 'silk-ivory'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'dove-grey',
    name: 'Dove Grey',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Pale Neutral Grey Flat',
    description:
      'Dove Grey brings the most delicate grey tone in the HEAVY-F range, a soft neutral that reads as white in lower light conditions but introduces a gentle grey quality under bright natural light. It is the preferred flat panel specification for commercial photography studios and visual content creation spaces where ceiling colour cast must be controlled without resorting to pure white.',
    image:
      'https://images.unsplash.com/photo-1558442086-8ea19a79cd4b?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#E0DDD8',
    coordinates: ['pure-white', 'titanium-white', 'cloud-white'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'titanium-white',
    name: 'Titanium White',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Cool Titanium Flat',
    description:
      'Titanium White uses a cool blue-white pigment balance that references the colour of titanium dioxide at high purity. This cool undertone makes it particularly effective in rooms with significant warm-toned timber furniture or terracotta floor tiles, where it provides a crisp, counterbalancing coolness to the ceiling plane without appearing harsh or clinical.',
    image:
      'https://images.unsplash.com/photo-1616137527312-7f88c42bf5ae?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F0F2F4',
    coordinates: ['pure-white', 'dove-grey', 'arctic-white'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'cloud-white',
    name: 'Cloud White',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Soft Cloud Flat',
    description:
      'Cloud White is the warmest white in the HEAVY-F range, referencing the gentle warmth of a morning cloud formation under a clear tropical sky. Its warmth is sufficient to coordinate with wood-grain ceilings in adjacent spaces without the transition feeling abrupt, making it the standard bridging finish where a wood-grain zone transitions to a plain ceiling zone in open-plan hospitality spaces.',
    image:
      'https://images.unsplash.com/photo-1617104611622-a4704b4f7fc2?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F8F4EE',
    coordinates: ['cream-satin', 'off-white', 'silk-ivory'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'silk-ivory',
    name: 'Silk Ivory',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Luxe Ivory Silk Flat',
    description:
      'Silk Ivory was developed specifically in response to feedback from luxury residential developers who required a flat panel finish that would match the ivory-white colour of Italian plaster ceilings. Its warm ivory tone carries the associations of artisanal craftsmanship while delivering the maintenance-free performance of UPVC.',
    image:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F0E8D8',
    coordinates: ['cream-satin', 'cloud-white', 'off-white'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'arctic-white',
    name: 'Arctic White',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Ultra-Cool Flat White',
    description:
      'Arctic White is the most specular and coolest white in the HEAVY-F collection. Under cool LED lighting in the 5000K to 6000K colour temperature range, it achieves a near-clinical brightness that is required in surgical suites, dental clinics, and pharmaceutical manufacturing environments where surface reflectance standards are specified by regulation.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F8FCFF',
    coordinates: ['titanium-white', 'pure-white', 'dove-grey'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised High-Reflectance PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'porcelain',
    name: 'Porcelain',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Smooth Porcelain Flat',
    description:
      'Porcelain references the glaze quality and tonal character of fine Chinese porcelain tableware. Its blue-grey-white ground has an almost translucent quality under diffuse light that gives flat panel ceilings an unexpected depth and material richness. It is a connoisseur\'s specification, recognised by experienced interior designers as the most considered choice in the HEAVY-F range.',
    image:
      'https://images.unsplash.com/photo-1603512500383-814f2e852c06?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#EDF0F2',
    coordinates: ['dove-grey', 'arctic-white', 'titanium-white'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Satin PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'cotton-white',
    name: 'Cotton White',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Soft Cotton Flat',
    description:
      'Cotton White was named by the product development team for its immediate material association with high-thread-count Egyptian cotton. The finish has a slight texture impression at the microscale that differentiates it from the completely smooth finishes in the HEAVY-F range, adding a faint tactile quality that reads as premium craftsmanship on close inspection.',
    image:
      'https://images.unsplash.com/photo-1556784344-ad913c73cfc4?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#FAFAF8',
    coordinates: ['cream-satin', 'linen-white', 'silk-ivory'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Micro-Texture PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'glacier-white',
    name: 'Glacier White',
    series: 'heavy-f',
    seriesLabel: 'i-Panel HEAVY-F',
    finish: 'Icy Translucent Flat',
    description:
      'Glacier White is engineered for spa and wellness environments where the ceiling must contribute to an atmosphere of pure, crystalline calm. Its cool translucent white has a slightly higher gloss level than the standard flat finishes, creating a surface that appears to glow rather than simply reflect when placed beneath recessed lighting arrays.',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b62ccd4?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#F0F5FA',
    coordinates: ['arctic-white', 'porcelain', 'titanium-white'],
    techSpecs: {
      thickness: '7.5mm',
      width: '300mm',
      length: '3000mm / 4000mm / 6000mm',
      warranty: '12 Years',
      coating: 'UV-Stabilised Gloss PVC, 0.20mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },

  // Wall Cladding (10 colours)
  {
    slug: 'teak-wall',
    name: 'Teak Wall',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Vertical Teak Grain Wall',
    description:
      'Teak Wall is engineered specifically for vertical application and features a grain orientation and scale calibrated for the wall plane rather than the ceiling. The vertical grain creates a room-heightening effect that is particularly valued in lower-ceiling contemporary apartments. The UV-stabilised laminate maintains colour accuracy on south-facing walls that receive direct sunlight through glass facades.',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#8B6240',
    coordinates: ['oak-rustic', 'bamboo-natural', 'lime-wash'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'oak-rustic',
    name: 'Oak Rustic',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Rustic Oak Vertical Cladding',
    description:
      'Oak Rustic brings a deliberately aged and characterful oak grain to the wall cladding range. The knots and grain variation in this finish are more pronounced than in the ceiling LITE range, appropriate for the closer viewing distances typical of wall applications. It is the preferred wall cladding finish for boutique hotel feature walls and residential dining room accent panels.',
    image:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#A07848',
    coordinates: ['teak-wall', 'bamboo-natural', 'lime-wash'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'stone-wash',
    name: 'Stone Wash',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Pale Stone Wash Cladding',
    description:
      'Stone Wash replicates the bleached, water-worn quality of coastal limestone that has been repeatedly submerged and dried by tidal action. The pale warm-grey ground with its faint surface pitting is calibrated for wall applications where a natural stone quality is required without the weight, cost, or installation complexity of actual stone.',
    image:
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#C5BFB5',
    coordinates: ['raw-concrete', 'travertine', 'anthracite'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'industrial-brick',
    name: 'Industrial Brick',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Exposed Brick Effect Cladding',
    description:
      'Industrial Brick provides the aesthetic of exposed Flemish-bond brickwork without the structural implications or installation cost. The panel replicates aged red-orange brick with authentic mortar joint detailing at a resolution sufficient to satisfy close-range inspection. It is the most requested wall cladding finish for food and beverage establishments targeting an industrial-vintage aesthetic.',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#9B5540',
    coordinates: ['terracotta', 'raw-concrete', 'anthracite'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised Texture PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'travertine',
    name: 'Travertine',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Italian Travertine Effect Cladding',
    description:
      'Travertine reproduces the characteristic cross-cut pattern of Italian travertine stone with its warm cream ground, linear fossil formations, and characteristic void patterns. The finish replicates the specific visual qualities of Roman travertine which has furnished the walls of buildings from the Colosseum to modernist masterpieces. It is the luxury wall cladding specification for premium residential lobbies and five-star hospitality bathrooms.',
    image:
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#D4C4A8',
    coordinates: ['stone-wash', 'terracotta', 'lime-wash'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'terracotta',
    name: 'Terracotta',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Warm Terracotta Cladding',
    description:
      'Terracotta returns the most ancient building material colour to the modern interior wall plane. Its warm red-orange is reminiscent of sun-baked Mediterranean tiles and Rajasthani palace interiors. In contemporary interiors, Terracotta creates an immediate warmth that resonates with rattan furniture, linen upholstery, and potted plant arrangements in residential and boutique hospitality contexts.',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#C06848',
    coordinates: ['industrial-brick', 'lime-wash', 'travertine'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'anthracite',
    name: 'Anthracite',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Deep Anthracite Wall Cladding',
    description:
      'Anthracite is the most commanding finish in the wall cladding range. Its near-black ground references the deepest and most carbon-rich form of coal, delivering an absolute depth that recedes visually and creates an impression of boundless space in rooms where a dark feature wall is used as a spatial device. It is the standard specification for home cinema feature walls and restaurant back-of-bar installations.',
    image:
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#2A2D30',
    coordinates: ['raw-concrete', 'industrial-brick', 'stone-wash'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised Solid Colour PVC, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'bamboo-natural',
    name: 'Bamboo Natural',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Natural Bamboo Weave Cladding',
    description:
      'Bamboo Natural references the woven bamboo matting used in traditional South and Southeast Asian interiors. The finish replicates the characteristic diagonal weave pattern of hand-processed bamboo in a photographic laminate that carries enough tonal variation to feel authentic at conversational distance. It is the preferred specification for wellness resort interiors, spa reception areas, and eco-lodge accommodation.',
    image:
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#B8A07A',
    coordinates: ['teak-wall', 'oak-rustic', 'lime-wash'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'lime-wash',
    name: 'Lime Wash',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Artisan Lime Wash Effect',
    description:
      'Lime Wash captures the layered, translucent quality of traditional lime plaster application where multiple thin coats create a depth and variation that modern emulsion paints cannot achieve. The finish references the interiors of centuries-old Provencal farmhouses and Balinese colonial villas, delivering a texture-rich backdrop that reads as authentically aged without requiring the damp tolerances of actual lime plaster.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#D8D0C0',
    coordinates: ['travertine', 'terracotta', 'stone-wash'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised Texture PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
  {
    slug: 'raw-concrete',
    name: 'Raw Concrete',
    series: 'wall-cladding',
    seriesLabel: 'i-Panel Wall Cladding',
    finish: 'Board-Formed Concrete Wall',
    description:
      'Raw Concrete replicates the board-formed shuttered concrete effect popularised by architects including Tadao Ando and Le Corbusier. The finish reproduces the horizontal board marks, form-tie holes, and subtle pour variation of poured architectural concrete at a resolution suitable for wall application where viewing distances are typically within 1.5 metres. It is the statement finish for progressive architecture practices and developers targeting the discerning contemporary residential market.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    thumbnailBg: '#9A9A98',
    coordinates: ['anthracite', 'stone-wash', 'industrial-brick'],
    techSpecs: {
      thickness: '7.5mm',
      width: '250mm',
      length: '2400mm / 3000mm',
      warranty: '10 Years',
      coating: 'UV-Stabilised Texture PVC Laminate, 0.18mm',
      fireRating: 'Class B Fire Retardant',
      moistureResistance: '100% Waterproof',
      uvIndex: 'UV Index 12 Rated',
    },
  },
];

export const getColourBySlug = (slug: string): ColourSpec | undefined =>
  allColours.find((c) => c.slug === slug);

export const getColoursBySeriesSlug = (series: ColourSpec['series']): ColourSpec[] =>
  allColours.filter((c) => c.series === series);

/**
 * Maps sitemap URL slugs → internal data keys used in colours.ts
 * New clean slugs (v2.1): i-series, heavy-b, lite
 * Legacy slugs kept as aliases for redirect support
 */
export const URL_SLUG_TO_DATA_KEY: Record<string, ColourSpec['series']> = {
  // v2.1 clean slugs
  'i-series':             'heavy-f',
  'heavy-b':              'heavy-b',
  'lite':                 'lite',
  // legacy aliases (still resolved by redirects in App.tsx)
  'architectural-flat':   'heavy-f',
  'ipanel-heavy-b':       'heavy-b',
  'ipanel-lite':          'lite',
  'wall-cladding-panels': 'wall-cladding',
};

export const DATA_KEY_TO_URL_SLUG: Record<string, string> = {
  'heavy-f':       'i-series',
  'heavy-b':       'heavy-b',
  'lite':          'lite',
  'wall-cladding': 'wall-cladding-panels',
};

export const seriesData = {
  'lite': {
    label: 'i-Panel LITE',
    slug: 'lite',
    tagline: 'Crafted for ceilings. Engineered to endure.',
    description:
      'The original i-Panel profile. At 7.5mm, the LITE series delivers rich wood-grain and solid-colour finishes across a 250mm width that installs in a fraction of the time required by conventional timber ceiling systems.',
    heroImage: '/products/lite.jpg',
    coverImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
    thickness: '7.5mm',
    width: '250mm',
    warranty: '12 Years',
    colours: 12,
  },
  'heavy-b': {
    label: 'i-Panel HEAVY-B',
    slug: 'heavy-b',
    tagline: 'Bevelled precision. Architectural shadow lines.',
    description:
      'The HEAVY-B series introduces a precision-bevelled edge profile that creates a continuous shadow line across the ceiling plane, delivering an architectural coffering effect at a fraction of the cost and installation time of traditional plaster details.',
    heroImage: '/products/heavy-b.jpg',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    thickness: '7.5mm',
    width: '200mm',
    warranty: '15 Years',
    colours: 12,
  },
  'heavy-f': {
    label: 'i-Panel HEAVY-F',
    slug: 'heavy-f',
    tagline: 'Pure flat planes. Maximum light diffusion.',
    description:
      'The HEAVY-F series provides an expansive 300mm flat profile optimised for spaces where seamless light diffusion and a clean, uninterrupted ceiling plane are the primary design priorities. Available in twelve calibrated white and near-white tones.',
    heroImage: '/products/heavy-flat.jpg',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    thickness: '7.5mm',
    width: '300mm',
    warranty: '12 Years',
    colours: 12,
  },
  'wall-cladding': {
    label: 'i-Panel Wall Cladding',
    slug: 'wall-cladding',
    tagline: 'Vertical stories. Horizontal ambition.',
    description:
      'Engineered for vertical application, the Wall Cladding series brings i-Panel\'s material quality to feature walls, bathroom surrounds, and full room cladding installations. Each finish is calibrated for the closer viewing distances of wall applications.',
    heroImage: '/products/wall.jpg',
    coverImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    thickness: '7.5mm',
    width: '250mm',
    warranty: '10 Years',
    colours: 10,
  },
};

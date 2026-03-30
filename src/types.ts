export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  materials: string[];
  isBespoke?: boolean;
  stockStatus: 'In Stock' | 'Limited Edition' | 'Sold Out';
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export const COLLECTIONS: Collection[] = [
  {
    id: 'heritage',
    title: 'The Heritage Vault',
    subtitle: 'Ancestral Echoes',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070',
    description: 'Jewelry inspired by the regality of ancient Indian dynasties, reimagined for the modern queen.'
  },
  {
    id: 'contemporary',
    title: 'Modern Power',
    subtitle: 'Minimalist Majesty',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b13b94b421?auto=format&fit=crop&q=80&w=1974',
    description: 'Clean lines meet traditional craftsmanship. For the woman who leads with grace.'
  },
  {
    id: 'bridal',
    title: 'Indrayani Bridal',
    subtitle: 'The Sacred Union',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1974',
    description: 'Masterpieces designed to be passed down through generations. A legacy in gold.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Empress Choker',
    price: 12500,
    description: 'Hand-crafted 22K gold choker featuring ethically sourced uncut diamonds and emerald drops. A testament to timeless power.',
    category: 'Necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800'
    ],
    materials: ['22K Gold', 'Uncut Diamonds', 'Emeralds'],
    stockStatus: 'Limited Edition'
  },
  {
    id: '2',
    name: 'Solaris Temple Rings',
    price: 4200,
    description: 'Inspired by the architecture of the Sun Temple, these rings symbolize eternal radiance and strength.',
    category: 'Rings',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1603561591411-071c4f713932?auto=format&fit=crop&q=80&w=800'
    ],
    materials: ['18K Gold', 'Rubies'],
    stockStatus: 'In Stock'
  },
  {
    id: '3',
    name: 'Celestial Jhumkas',
    price: 8900,
    description: 'Intricate filigree work depicting the night sky. Lightweight yet commanding in presence.',
    category: 'Earrings',
    images: [
      'https://images.unsplash.com/photo-1630019058353-5ff3fec7bc92?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800'
    ],
    materials: ['22K Gold', 'South Sea Pearls'],
    stockStatus: 'Limited Edition'
  }
];

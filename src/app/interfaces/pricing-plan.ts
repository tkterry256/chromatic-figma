export interface PricingPlan {
  name: string;
  tagline: string;
  price?: number;
  priceMode: 'free' | 'custom' | 'price';
  priceRate: 'lifetime' | 'year';
  link?: string;
  isRecommended: boolean;
  cta: string; // call to action text
  features: string[];
}

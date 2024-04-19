import { PricingPlan } from '../interfaces/pricing-plan';

export const mockPricingPlans: PricingPlan[] = [
  {
    name: 'Personal',
    tagline: 'Perfect plan for starters',
    priceMode: 'free',
    priceRate: 'lifetime',
    cta: 'Current Plan',
    isRecommended: false,
    features: [
      'Unlimited projects',
      'Share with 2 team members',
      'Sync across devices',
    ],
  },
  {
    name: 'Professional',
    tagline: 'For users who want to do more',
    price: 80,
    priceMode: 'price',
    priceRate: 'year',
    cta: 'Get Started',
    link: '#professional',
    isRecommended: false,
    features: [
      'Unlimited projects',
      'Sync across devices',
      'Share with multiple',
      '30 day version history',
    ],
  },
  {
    name: 'Team',
    tagline: 'Your entire team in one place',
    price: 160,
    priceMode: 'price',
    priceRate: 'year',
    cta: 'Get Started',
    link: '#team',
    isRecommended: true,
    features: [
      'Including professional plan',
      'Collaborative workspace',
      'Unlimited team members',
      'Admin tools',
      'Sharing permissions',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Run your company on your terms',
    priceMode: 'custom',
    priceRate: 'lifetime',
    cta: 'Contact Us',
    link: '#enterprise',
    isRecommended: false,
    features: [
      'Including team plan',
      'Advanced security',
      'Custom contract',
      'SAML SSO',
    ],
  },
];
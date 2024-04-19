import { type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { PricingPlanComponent } from '../../app/components/pricing-plan/pricing-plan.component';
import { mockPricingPlans } from '../../app/mock-data/mock-pricing-plans';
import { produce } from 'immer';

const meta: Meta<PricingPlanComponent> = {
  title: 'components/PricingPlan',
  component: PricingPlanComponent,
  tags: ['autodocs'],
  render: (args: PricingPlanComponent) => ({
    props: { ...args },
    template: `
    <div id="app">
      <div class="flex justify-center items-center max-h-full overflow-y-auto *:min-w-[300px]">
        <app-pricing-plan ${argsToTemplate(args)} >Hello World</app-pricing-plan>
      </div>
    </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<PricingPlanComponent>;

const mockPricingPlan = mockPricingPlans[0];

export const DefaultNoLink: Story = {
  args: {
    plan: mockPricingPlan,
  },
};

export const DefaultWithLink: Story = {
  args: {
    plan: produce(mockPricingPlan, (plan) => {
      plan.link = '#link';
    }),
  },
};

export const Recommended: Story = {
  args: {
    plan: produce(mockPricingPlan, (plan) => {
      plan.isRecommended = true;
    }),
  },
};

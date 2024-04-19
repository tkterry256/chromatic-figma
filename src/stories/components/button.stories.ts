import { type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { ButtonComponent } from '../../app/components/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: { ...args },
    template: `
    <div id="app">
      <button ${argsToTemplate(args)} app-button>Hello World</button>
    </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};
export const Light: Story = {
  args: {
    variant: 'light',
  },
  parameters: { backgrounds: { default: 'light' } },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

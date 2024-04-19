import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { PricingPlan } from '../../interfaces/pricing-plan';
import { CurrencyPipe, NgClass, TitleCasePipe } from '@angular/common';
import { ClassValue, cn } from '../../utils';
import { ButtonComponent, ButtonVariant } from '../button/button.component';

@Component({
  selector: 'app-pricing-plan',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe, ButtonComponent, NgClass],
  templateUrl: './pricing-plan.component.html',
  styleUrl: './pricing-plan.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPlanComponent {
  /**
   * @description Input for the pricing plan data.
   * @required
   */
  @Input({ required: true })
  plan!: PricingPlan;

  /**
   * @description Additional CSS classes for customization.
   */
  @Input()
  className: ClassValue = '';

  get ctaButtonVariant(): ButtonVariant {
    return this.plan.isRecommended
      ? 'secondary'
      : this.plan.link
        ? 'filled'
        : 'light';
  }

  @HostBinding('class') get klass() {
    return cn(
      'px-4 py-6 rounded flex flex-col gap-7 min-h-[500px]',
      {
        'bg-indigo-800 text-white': this.plan.isRecommended,
        'bg-white text-black': !this.plan.isRecommended,
      },
      this.className,
    );
  }
}

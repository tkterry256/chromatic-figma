import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PricingPlan } from './interfaces/pricing-plan';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { mockPricingPlans } from './mock-data/mock-pricing-plans';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PricingPlanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-3 flex justify-center items-center h-dvh bg-slate-800 *:min-h-0',
  },
})
export class AppComponent {
  pricingPlans: PricingPlan[] = mockPricingPlans;
}

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { ClassValue, cn } from '../../utils';

export type ButtonVariant = 'filled' | 'light' | 'secondary';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  filled: 'bg-indigo-700 text-white',
  light: 'bg-indigo-700/10 text-indigo-700',
  secondary: 'text-indigo-700 bg-white',
};

const DEFAULT_CLASSES = 'px-5 py-2.5 rounded-md text-center align-middle';

@Component({
  selector: '[app-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /**
   * Input property defining the variant of the button.
   * @defaultValue 'filled'
   */
  @Input()
  variant: ButtonVariant = 'filled';

  /**
   * Input property for additional custom classes to apply to the button.
   * @type { ClassValue }
   * @defaultValue ''
   */
  @Input()
  className: ClassValue = '';

  @HostBinding('class') get klass() {
    return cn(
      DEFAULT_CLASSES,
      VARIANT_CLASSES[this.variant],
      this.className,
    );
  }

}

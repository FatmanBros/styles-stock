import { LoadButtonComponent } from '../component/view/button/load-button/load-button.component';
import { DesignButtonComponent } from '../component/view/button/design-button/design-button.component';
import { HoverEffectsComponent } from '../component/view/button/hover-effects/hover-effects.component';
import { ToggleSwitchComponent } from '../component/view/checkbox/toggle-switch/toggle-switch.component';

export class ModuleConstants {
  public static StylesComponents = {
    button: {
      button1: { component: DesignButtonComponent },
      'loading': { component: LoadButtonComponent },
      'hover-effects': { component: HoverEffectsComponent }
    },
    checkbox: {
      toggle: { component: ToggleSwitchComponent },
    }
  }
}
import { Button } from 'protractor';
import { DesignButtonComponent } from '../component/view/button/design-button/design-button.component';
import { ToggleSwitchComponent } from '../component/view/checkbox/toggle-switch/toggle-switch.component';

export class ModuleConstants {
  public static StylesComponents = {
    button: {
      button1: { component: DesignButtonComponent }
    },
    checkbox: {
      toggle: { component: ToggleSwitchComponent },
    }
  }
}
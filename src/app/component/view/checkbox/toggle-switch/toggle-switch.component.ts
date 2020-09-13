import { Component, OnInit } from '@angular/core';
import { DynamicComponent, IDynamicComponent } from '../../dynamic.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent extends DynamicComponent implements OnInit, IDynamicComponent {

  public title = 'トグルボタン';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

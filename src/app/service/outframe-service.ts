import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DynamicComponent } from '../component/view/dynamic.component';

@Injectable({
  providedIn: 'root'
})
export class OutframeService {

  public $title = new Subject<string>();

  public setTitle(title: string) {
    this.$title.next(title);
  }

  public $exampleComponent = new Subject<DynamicComponent>();
  public setExampleComponent(component: DynamicComponent) {
    this.$exampleComponent.next(component);
  }

  public selectedComponent: DynamicComponent;
  public $select = new Subject<DynamicComponent>();
  public setSelectComponent(component: DynamicComponent) {
    this.$select.next(component);
    this.selectedComponent = component;
  }

  constructor() { }

}

import { Component, ComponentFactory, ComponentFactoryResolver, Inject, Injector, Input, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToggleSwitchComponent } from '../../view/checkbox/toggle-switch/toggle-switch.component';
import { DynamicComponent } from '../../view/dynamic.component';

export interface DialogData {
  title: string;
  component: any;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input()
  public set component(component: any) {
    if (!component) {
      return;
    }
    let factory = this.resolver.resolveComponentFactory(component);
    this.viewContainerRef.createComponent(factory);
  };

  private factory: ComponentFactory<DynamicComponent>;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
  ) {
  }

  ngOnInit() {
  }
}

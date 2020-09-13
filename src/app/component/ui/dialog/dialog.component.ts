import { Component, ComponentFactory, ComponentFactoryResolver, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  private factory: ComponentFactory<DynamicComponent>;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,

    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) { }

  ngOnInit() {
    this.factory = this.resolver.resolveComponentFactory(DynamicComponent);
    this.viewContainerRef.createComponent(this.factory);
  }
}

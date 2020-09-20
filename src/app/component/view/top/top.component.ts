import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ModuleConstants } from 'src/app/module/module-constants';
import { OutframeService } from 'src/app/service/outframe-service';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public title = 'トップページ';

  public example: DynamicComponent;
  public select: DynamicComponent;

  public subscriptions: Subscription[] = [];

  public contentList: { title: string, detail: { [key: string]: { component: any } } }[] = [];

  constructor(
    private matDialog: MatDialog,
    private outFrameService: OutframeService,
  ) { }

  ngOnInit(): void {
    // メニューリスト追加
    Object.keys(ModuleConstants.StylesComponents).forEach(key => {
      this.contentList.push({ title: key, detail: ModuleConstants.StylesComponents[key] })
    })

    const exampleSub = this.outFrameService.$exampleComponent.subscribe(example => {
      this.example = example;
    })

    const selectSub = this.outFrameService.$select.subscribe(select => {
      this.select = select;
    })
    this.subscriptions.push(selectSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(ss => ss.unsubscribe())
  }
}

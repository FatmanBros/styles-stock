import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModuleConstants } from 'src/app/module/module-constants';
import { OutframeService } from 'src/app/service/outframe-service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public title = 'トップページ';

  public contentList: { title: string, detail: { [key: string]: { component: any } } }[] = [];

  constructor(
    private matDialog: MatDialog,
    private outframeService: OutframeService
  ) { }

  ngOnInit(): void {
    // メニューリスト追加
    Object.keys(ModuleConstants.StylesComponents).forEach(key => {
      this.contentList.push({ title: key, detail: ModuleConstants.StylesComponents[key] })
    })
  }


  public getDetail(contents): { title: string, path: string }[] {
    return Object.keys(contents.detail).map(content => {
      return { title: content, path: '/' + contents.title + '/' + content, component: contents.detail[content].component };
    })
  }

  /**
   * ダイアログでページの一部を表示する
   * 
   * @param detail 
   */
  public openDialog(detail) {
    this.outframeService.setExampleComponent(detail.component);
  }
}

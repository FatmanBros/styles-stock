import { Component, Input, OnInit } from '@angular/core';
import { OutframeService } from 'src/app/service/outframe-service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  public groupTitle: string = "";
  public detailList;

  @Input()
  public set content(contents) {
    this.groupTitle = contents.title;
    this.detailList = Object.keys(contents.detail).map(key => {
      return { title: key, path: '/' + contents.title + '/' + key, component: contents.detail[key].component };
    })
  }

  constructor(
    private outframeService: OutframeService
  ) { }

  ngOnInit(): void {
  }

  /**
   * ダイアログでページの一部を表示する
   * 
   * @param detail 
   */
  public selectExample(detail) {
    this.outframeService.setExampleComponent(detail.component);
  }
  /**
   * ダイアログの選択解除
   */
  public removeExample() {
    this.outframeService.setExampleComponent(null);
  }
  public onClick(detail) {
    this.outframeService.setSelectComponent(detail.component);
  }

  public getSelected() {
    return this.outframeService.selectedComponent;
  }
}

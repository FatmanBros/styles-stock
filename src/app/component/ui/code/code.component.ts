import { Component, OnInit } from '@angular/core';
import { OutframeService } from 'src/app/service/outframe-service';
import { DynamicComponent } from '../../view/dynamic.component';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  public codeMirrorOptions = {
    lineNumbers: true,
    theme: 'material',
    mode: 'markdown',
    lineWrapping: false,
    tabSize: 2,
    fixedGutter: true,
  };

  public cssContent: string;

  public htmlContent: string;

  public scriptContent: string;

  constructor(
    private outFrameService: OutframeService
  ) { }

  ngOnInit(): void {
    // this.outFrameService.$select.subscribe((selected: any) => {
    //   let template = selected['decorators'][0]['args'][0]['templateUrl'];
    //   let style = selected['decorators'][0]['args'][0]['styleUrls'][0];
    // });
  }



}

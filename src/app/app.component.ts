import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OutframeService } from './service/outframe-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'style-stock';
  private subscriptions: Subscription[] = [];

  constructor(private outFrameService: OutframeService) {

  }

  ngOnInit() {
    const sub1 = this.outFrameService.$title.subscribe(title => {
      this.title = title;
    })

    this.subscriptions.push(sub1);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(ss => ss.unsubscribe())
  }

}

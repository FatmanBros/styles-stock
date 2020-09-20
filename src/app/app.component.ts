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

  ngOnInit(): void {
    const titleSubscription = this.outFrameService.$title.subscribe(title => {
      this.title = title;
    });
    this.subscriptions.push(titleSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(ss => ss.unsubscribe());
  }

}

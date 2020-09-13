import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicComponent } from './component/view/dynamic.component';
import { OutframeService } from './service/outframe-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'style-stock';

  public example: DynamicComponent;

  private subscriptions: Subscription[] = [];

  constructor(private outFrameService: OutframeService) {

  }

  ngOnInit() {
    const titleSubscription = this.outFrameService.$title.subscribe(title => {
      this.title = title;
    })
    this.subscriptions.push(titleSubscription);

    const exampleSub = this.outFrameService.$exampleComponent.subscribe(example => {
      this.example = example;
    })
    this.subscriptions.push(exampleSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(ss => ss.unsubscribe())
  }

}

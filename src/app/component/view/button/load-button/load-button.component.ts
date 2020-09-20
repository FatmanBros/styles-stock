import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss']
})
export class LoadButtonComponent implements OnInit {

  public loading = false;
  public validate = false;
  constructor() { }

  ngOnInit(): void {
  }

  public async onClick(): Promise<void> {
    const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

    this.loading = true;
    await sleep(1000);
    this.loading = false;
    this.validate = true;
    await sleep(1000);
    this.validate = false;
  }

}

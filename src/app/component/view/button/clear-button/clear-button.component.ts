import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.scss']
})
export class ClearButtonComponent implements OnInit {

  public loading: boolean = false;

  public validate: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public async onClick() {
    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

    this.loading = true;
    await sleep(1000);
    this.loading = false;
    this.validate = true;
    await sleep(1000);
    this.validate = false;
  }

}

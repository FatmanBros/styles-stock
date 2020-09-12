import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutframeService {

  public $title = new Subject<string>();

  public setTitle(title: string) {
    this.$title.next(title);
  }

  constructor() { }

}

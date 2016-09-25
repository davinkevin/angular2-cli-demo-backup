import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  constructor() { }

  getNow() {
    return new Date().toString();
  }
}

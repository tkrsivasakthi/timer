import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>Your download begins in 
  {{t}}seconds</p>
   <p *ngIf="takeOff">Take off done</p>
   <button (click)="reset()"> Coundown reset</button>
  `,
})
export class App {
  name = 'Angular';
  takeOff: boolean = false; // to show takeoff message
  t: number = 10; // timer
  endtime = 0;

  public reduceTime(t) {
    console.log('sakthi-', t);
    let remainingTimeElement = t;
    const Timer = setInterval(() => {
      if (remainingTimeElement <= 0) clearInterval(Timer);
      this.t -= 1;
      if (this.t == 0) {
        this.t = 10;
        this.takeOff = true;
      }
    }, 1000);
  }

  constructor() {
    this.reduceTime(this.t);
  }
  //for reset coundown
  reset() {
    if (this.takeOff != true && this.t != 0) {
      this.t = 10;
      alert('count down reset done');
    } else {
      this.takeOff = false;
      alert('not possible to reset');
    }
  }
}

bootstrapApplication(App);

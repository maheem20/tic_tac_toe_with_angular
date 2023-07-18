import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <p>
        {{ randomNumber }}
      </p>
    `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  randomNumber: number | undefined;

  constructor() {
    setInterval(() => this.randomNumber = Math.random(), 500);
  }
}

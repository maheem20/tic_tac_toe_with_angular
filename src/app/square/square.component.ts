import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styleUrls: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
}

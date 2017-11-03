import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  buttons = [['OFF', 'red'], ['ON', 'green'], ['OFF', 'red'], ['OFF', 'red'], ['OFF', 'red'], ['OFF', 'red'], 
    ['OFF', 'red'], ['OFF', 'red'], ['OFF', 'red'], ['OFF', 'red']];

  toggle_button(num) {
    if (this.buttons[num][0] === 'OFF') {
      this.buttons[num][0] = 'ON';
      this.buttons[num][1] = 'green';
    } else if (this.buttons[num][0] === 'ON') {
      this.buttons[num][0] = 'OFF';
      this.buttons[num][1] = 'red';
    }
  }
}

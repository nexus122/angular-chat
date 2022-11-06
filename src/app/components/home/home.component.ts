import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
  roomName: String = '';
  entrarEnLaSala() {
    location.href = 'http://localhost:4200/' + this.roomName;
  }
  crearUnaSala() {
    location.href = 'http://localhost:4200/' + 'room_' + Date.now();
  }
}

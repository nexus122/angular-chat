import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  roomName: String = '';
  entrarEnLaSala() {
    this.router.navigate(['/' + this.roomName]);
  }
  crearUnaSala() {
    let random: string = '/' + 'room_' + Date.now();
    this.router.navigate([random]);
  }
}

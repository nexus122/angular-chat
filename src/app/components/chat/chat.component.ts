import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  text: string = '';
  room: string;
  constructor(public chat: ChatService, private rutaActiva: ActivatedRoute) {
    this.room = this.rutaActiva.snapshot.params['room'];
    localStorage.setItem('room', this.room);
  }

  sendMessage() {
    this.chat.sendMessage(this.text);
    this.text = '';
  }
}

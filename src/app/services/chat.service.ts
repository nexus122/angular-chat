import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chats: Array<any> = [];
  constructor(private socket: SocketService) {
    this.onReciveMessage(); // Con esto al cargar el chat se queda escuchando
    this.socket.io.emit('roomEntry', {
      room: localStorage.getItem('room'),
    });
  }

  // Enviar mensajes
  sendMessage(messageInfo: any) {
    this.chats.push(messageInfo);
    this.socket.io.emit('sendMessage', {
      room: localStorage.getItem('room'),
      message: messageInfo,
    });
  }

  // Recibir mensajes
  onReciveMessage() {
    this.socket.io.on('reciveMessage', (messageInfo) => {
      this.chats.push(messageInfo);
    });
  }
}

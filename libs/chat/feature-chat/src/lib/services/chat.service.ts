import { Injectable } from '@angular/core';
import { Room } from '@prisma/client';
import { Observable } from 'rxjs';
import { ChatSocket } from '../sockets/chat.socket';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private readonly socket: ChatSocket) {}

  getMessages(): Observable<string[]> {
    return this.socket.fromEvent('message');
  }

  getRooms(): Observable<Room[]> {
    return this.socket.fromEvent('rooms');
  }
}

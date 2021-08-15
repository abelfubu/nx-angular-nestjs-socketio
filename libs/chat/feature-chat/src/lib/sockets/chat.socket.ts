import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class ChatSocket extends Socket {
  constructor() {
    super({
      url: 'http://localhost:3333',
      options: {
        transportOptions: {
          polling: {
            extraHeaders: {
              Authorization: `Bearer ${localStorage.getItem('USR_TKN')}`,
            },
          },
        },
      },
    });
  }
}

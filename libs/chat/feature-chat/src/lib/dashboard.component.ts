import { Component, OnInit } from '@angular/core';
import { Room } from '@prisma/client';
import { AuthStore } from '@socketio/chat/feature-auth';
import { tap } from 'rxjs/operators';
import { ChatStore } from './store/chat.store';

@Component({
  selector: 'socketio-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ChatStore],
})
export class DashboardComponent implements OnInit {
  vm$ = this.chatStore.vm$.pipe(tap(console.log));
  isLoggedIn$ = this.authStore.isLoggedIn$;

  constructor(
    private readonly chatStore: ChatStore,
    private readonly authStore: AuthStore,
  ) {}

  ngOnInit(): void {
    this.chatStore.getMessages();
    this.chatStore.getRooms();
  }

  selectRoom(room: Room) {
    console.log(room);
  }

  logout(): void {
    this.authStore.logout();
  }
}

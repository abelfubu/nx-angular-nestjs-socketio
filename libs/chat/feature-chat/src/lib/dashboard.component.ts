import { Component, OnInit } from '@angular/core';
import { ChatStore } from './store/chat.store';

@Component({
  selector: 'socketio-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ChatStore],
})
export class DashboardComponent implements OnInit {
  vm$ = this.chatStore.vm$;

  constructor(private readonly chatStore: ChatStore) {}

  ngOnInit(): void {
    this.chatStore.getMessages();
    this.chatStore.getRooms();
  }
}

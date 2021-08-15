import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Room } from '@prisma/client';
import { switchMap } from 'rxjs/operators';
import { ChatService } from '../services/chat.service';

export interface ChatState {
  messages: string[];
  rooms: Room[];
}

const DEFAULT_STATE: ChatState = {
  messages: [],
  rooms: [],
};

@Injectable()
export class ChatStore extends ComponentStore<ChatState> {
  constructor(private readonly chatService: ChatService) {
    super(DEFAULT_STATE);
  }

  readonly vm$ = this.select(({ messages, rooms }) => ({ messages, rooms }));

  readonly getMessages = this.effect((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.chatService.getMessages().pipe(
          tapResponse(
            (messages) => this.addMessages(messages),
            (error) => console.log(error),
          ),
        ),
      ),
    ),
  );

  readonly getRooms = this.effect((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.chatService.getRooms().pipe(
          tapResponse(
            (rooms) => this.addRooms(rooms),
            (error) => console.log(error),
          ),
        ),
      ),
    ),
  );

  readonly addMessages = this.updater((state, messages: string[]) => ({
    ...state,
    messages,
  }));

  readonly addRooms = this.updater((state, rooms: Room[]) => ({
    ...state,
    rooms,
  }));
}

// SwitchMap cancels previous requests and only perform the last one
// MergeMap performs all requests in parallel
// ConcatMap Performs all requests in sequence
// ExhaustMap cancels last requests until first request is finished

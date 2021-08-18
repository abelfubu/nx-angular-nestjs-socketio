import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Room } from '@prisma/client';
import { DataService } from '@socketio/api/data-access';
import { RoomDto } from '@socketio/api/models';
import { RoomService } from '@socketio/api/room';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: ['https://hoppscotch.io', 'http://localhost:4200'] },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly jwtService: JwtService,
    private readonly dataService: DataService,
    private readonly roomService: RoomService,
  ) {}

  async handleConnection(socket: Socket) {
    try {
      const [, token] = socket.handshake.headers.authorization.split(' ');
      const decoded = await this.jwtService.verify(token);
      const user = await this.dataService.user.findUnique({ where: { id: decoded.id } });
      if (!user) return this.disconnect(socket);
      socket.data.user = user;
      const rooms = await this.roomService.getRoomsByUserId(user.id, {
        page: 1,
        limit: 10,
      });
      console.log(user);
      this.server.emit('message', `Welcome ${user.username}!`);
      this.server.emit('rooms', rooms);
    } catch (error) {
      console.log(error);
      this.disconnect(socket);
    }
  }

  @SubscribeMessage('createRoom')
  handlecreateRoom(socket: Socket, room: RoomDto): Promise<Room> {
    return this.roomService.create(room, socket.data.user);
  }

  @SubscribeMessage('disconnect')
  handleDisconnect(socket: Socket) {
    socket.disconnect();
  }

  private disconnect(socket: Socket) {
    socket.emit('Error', new UnauthorizedException());
    socket.disconnect();
  }
}

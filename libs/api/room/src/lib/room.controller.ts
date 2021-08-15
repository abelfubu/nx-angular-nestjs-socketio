import { Room, User } from '.prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDto } from '@socketio/api/models';
import { GetUser, JwtGuard } from '@socketio/api/auth';

@UseGuards(JwtGuard)
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getAll(): Promise<Room[]> {
    return this.roomService.getAll();
  }

  @Post()
  create(@Body() room: RoomDto): Promise<Room> {
    return this.roomService.create(room);
  }

  @Patch(':id/user')
  addUser(@Param('id') id: string, @GetUser() user: User): Promise<Room> {
    return this.roomService.addUser(id, user.id);
  }

  @Delete(':id/user')
  removeUser(@Param('id') id: string, @GetUser() user: User): Promise<Room> {
    return this.roomService.removeUser(id, user.id);
  }
}

import { Room } from '.prisma/client';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { DataService } from '@socketio/api/data-access';
import { RoomDto } from '@socketio/api/models';

@Injectable()
export class RoomService {
  constructor(private readonly dataService: DataService) {}

  async getAll(): Promise<Room[]> {
    return await this.dataService.room.findMany({ include: { users: true } });
  }

  async create(room: RoomDto): Promise<Room> {
    return await this.dataService.room.create({ data: room });
  }

  async getRoomsByUserId(userId: string, { page = 1, limit = 10 }): Promise<Room[]> {
    const { rooms } = await this.dataService.user.findUnique({
      where: { id: userId },
      select: { rooms: { take: limit, skip: (page - 1) * limit } },
    });
    return rooms;
  }

  async addUser(id: string, userId: string): Promise<Room> {
    if (!userId) throw new UnauthorizedException();
    const room = await this.dataService.room.findUnique({ where: { id } });
    if (!room) throw new NotFoundException('Room not found');
    return await this.dataService.room.update({
      where: { id },
      data: { users: { connect: { id: userId } } },
      include: { users: true },
    });
  }

  async removeUser(id: string, userId: string): Promise<Room> {
    if (!userId) throw new UnauthorizedException();
    const room = await this.dataService.room.findUnique({ where: { id } });
    if (!room) throw new NotFoundException('Room not found');
    return await this.dataService.room.update({
      where: { id },
      data: { users: { disconnect: { id: userId } } },
      include: { users: true },
    });
  }
}

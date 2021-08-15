import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { ApiDataAccessModule } from '@socketio/api/data-access';
import { RoomController } from './room.controller';

@Module({
  imports: [ApiDataAccessModule],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class ApiRoomModule {}

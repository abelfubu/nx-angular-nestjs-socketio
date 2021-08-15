import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ApiAuthModule } from '@socketio/api/auth';
import { ApiDataAccessModule } from '@socketio/api/data-access';
import { ApiRoomModule } from '@socketio/api/room';

@Module({
  imports: [ApiAuthModule, ApiDataAccessModule, ApiRoomModule],
  providers: [ChatGateway],
  exports: [ChatGateway],
})
export class ApiChatModule {}

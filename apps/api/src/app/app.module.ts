import { Module } from '@nestjs/common';
import { ApiUserModule } from '@socketio/api/user';
import { ApiChatModule } from '@socketio/api/chat';
import { ApiRoomModule } from '@socketio/api/room';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [ApiUserModule, ApiChatModule, ApiRoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

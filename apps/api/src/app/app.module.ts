import { Module } from '@nestjs/common';
import { ApiUserModule } from '@socketio/api/user';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

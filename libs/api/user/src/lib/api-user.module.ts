import { Module } from '@nestjs/common';
import { ApiAuthModule } from '@socketio/api/auth';
import { ApiDataAccessModule } from '@socketio/api/data-access';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [ApiDataAccessModule, ApiAuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class ApiUserModule {}

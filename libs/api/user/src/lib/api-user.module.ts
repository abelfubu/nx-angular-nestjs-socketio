import { Module } from '@nestjs/common';
import { ApiDataAccessModule } from '@socketio/api/data-access';

@Module({
  imports: [ApiDataAccessModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiUserModule {}

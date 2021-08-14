import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ApiDataAccessModule } from '@socketio/api/data-access';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ApiDataAccessModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtGuard, JwtStrategy],
  exports: [AuthService, JwtGuard, JwtStrategy],
})
export class ApiAuthModule {}

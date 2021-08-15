import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ApiDataAccessModule } from '@socketio/api/data-access';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ApiDataAccessModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtGuard, JwtStrategy],
  exports: [AuthService, JwtGuard, JwtStrategy, PassportModule],
})
export class ApiAuthModule {}

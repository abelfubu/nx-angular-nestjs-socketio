import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { DataService } from '@socketio/api/data-access';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly dataService: DataService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: User): Promise<User> {
    const user = await this.dataService.user.findUnique({
      where: { id: payload.id },
    });
    if (!user) throw new UnauthorizedException();
    return payload;
  }
}

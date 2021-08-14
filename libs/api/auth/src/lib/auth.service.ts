import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { DataService } from '@socketio/api/data-access';
import { LoginDto, UserDto } from '@socketio/api/models';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly dataService: DataService) {}

  async add(user: UserDto): Promise<string> {
    try {
      user.password = await this.hashPassword(user.password);
      const newUser = await this.dataService.user.create({ data: user });
      delete newUser.password;
      return this.jwtService.sign(newUser);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Email already exist');
      }
    }
  }

  async login({ email, password }: LoginDto): Promise<string> {
    const user = await this.dataService.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('User not found...');
    const isValid = await compare(password, user.password);
    if (!isValid) throw new UnauthorizedException('Wrong credentials');
    delete user.password;
    return this.jwtService.sign(user);
  }

  private hashPassword(password: string): Promise<string> {
    return hash(password, 10);
  }
}

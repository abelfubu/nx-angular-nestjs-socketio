import { User } from '.prisma/client';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthService, JwtGuard } from '@socketio/api/auth';
import { LoginDto, UserDto } from '@socketio/api/models';
import { TokenResponse } from '@socketio/shared/models';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtGuard)
  @Get('user')
  getAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ): Promise<Partial<User>[]> {
    return this.userService.getAll(page, limit);
  }

  @Post('register')
  add(@Body() user: UserDto): Promise<TokenResponse> {
    return this.authService.add(user);
  }

  @Post('login')
  login(@Body() user: LoginDto): Promise<TokenResponse> {
    return this.authService.login(user);
  }
}

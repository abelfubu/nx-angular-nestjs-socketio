import { AuthService } from '@auth';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserResponse } from '@ngnest-sockets/api-interfaces';
import { LoginDto, UserDto } from '../../../models';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('user')
  getAll(@Query('page') page: string, @Query('limit') limit: string): Promise<UserResponse[]> {
    return this.userService.getAll(page, limit);
  }

  @Post('user')
  add(@Body() user: UserDto): Promise<string> {
    return this.authService.add(user);
  }

  @Post('login')
  login(@Body() user: LoginDto): Promise<string> {
    return this.authService.login(user);
  }
}

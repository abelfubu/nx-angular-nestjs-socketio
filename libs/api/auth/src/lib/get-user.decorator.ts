import { User } from '.prisma/client';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (_data, context: ExecutionContext): User => {
    return context.switchToHttp().getRequest().user;
  },
);

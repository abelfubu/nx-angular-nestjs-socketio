import { Injectable } from '@nestjs/common';
import { DataService } from '@socketio/api/data-access';
import { userQuery } from './user.data';

@Injectable()
export class UserService {
  constructor(private dataService: DataService) {}

  async getAll(page = '1', limit = '100'): Promise<unknown[]> {
    return await this.dataService.user.findMany({
      ...userQuery,
      take: Number(limit),
      skip: (Number(page) - 1) * Number(limit),
    });
  }
}

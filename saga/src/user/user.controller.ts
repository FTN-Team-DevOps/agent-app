import { Controller, Get, Headers } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getOne(@Headers() headers: any): Promise<User> {
    return await this.userService.find(headers.authorization);
  }
}

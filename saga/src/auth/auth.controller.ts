import { Body, Controller, Logger, Post } from '@nestjs/common';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';
import { AuthCreateDTO } from './dto/auth-create.dto';
import { UserLoginDTO } from './dto/user-login.dto';

@Controller('/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('logIn')
  async logIn(@Body('logIn') logIn: UserLoginDTO): Promise<Auth> {
    return await this.authService.login(logIn);
  }

  @Post('register')
  async create(
    @Body('registration') registration: AuthCreateDTO,
  ): Promise<Auth> {
    Logger.log({ registration });
    return await this.authService.create(registration);
  }
}

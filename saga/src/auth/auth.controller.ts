import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  public search(): Promise<string> {
    return this.authService.test();
  }
}

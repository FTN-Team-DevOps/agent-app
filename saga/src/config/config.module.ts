import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}

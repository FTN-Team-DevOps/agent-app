import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { AuthController } from './auth.controller';
import { Auth, AuthSchema } from './auth.model';
import { AuthService } from './auth.service';
import { JWTStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule,
    forwardRef(() => UserModule),
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule, UserModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getJWTSecret(),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService, UserService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JWTStrategy],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}

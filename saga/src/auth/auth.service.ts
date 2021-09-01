import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTPayloadDTO } from './dto/jwt-payload.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './auth.model';
import { Model } from 'mongoose';
import { AuthCreateDTO } from './dto/auth-create.dto';
import { UserLoginDTO } from './dto/user-login.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<AuthDocument>,
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  public createJWTToken(payload: JWTPayloadDTO): string {
    return this.jwtService.sign(payload);
  }

  public async create(auth: AuthCreateDTO): Promise<Auth> {
    const user: User = { ...auth };
    const savedUser = await this.userService.create(user);
    const password = auth.password;
    const token = this.createJWTToken({
      user: savedUser._id,
    });
    return this.authModel.create({
      password,
      token,
      email: user.email,
      user: savedUser._id,
    });
  }

  public async login(userCredentials: UserLoginDTO): Promise<Auth> {
    const auth = await this.authModel.findOne({ email: userCredentials.email });
    if (!auth || (auth && userCredentials.password !== auth.password)) {
      Logger.log(userCredentials.password, auth.password);
      throw new BadRequestException('Bad credentials!');
    }

    return auth;
  }

  public async checkPermission(token: string): Promise<boolean> {
    const auth = await this.authModel.findOne({ token });
    return !!auth;
  }

  public async ifMy(token: string, user: string): Promise<boolean> {
    const auth = await this.authModel.findOne({ token });
    if (auth) {
      return auth.user.toString() === user;
    }
    return false;
  }

  public async getByToken(token: string): Promise<Auth> {
    const auth = await this.authModel.findOne({ token });
    if (!auth) {
      throw new NotFoundException();
    }
    return auth;
  }
}

import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async find(token: string): Promise<User> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return await this.userModel.findOne({ _id: auth.user });
    } else {
      throw new UnauthorizedException();
    }
  }

  async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }
}

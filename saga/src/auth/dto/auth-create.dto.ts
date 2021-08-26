import { User } from 'src/user/user.model';

export class AuthCreateDTO extends User {
  password: string;
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop()
  user: string;
  @Prop()
  password: string;
  @Prop()
  email: string;
  @Prop()
  token: string;
  _id?: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);

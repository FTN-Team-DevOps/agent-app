import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
})
export class User {
  @Prop()
  name: string;
  @Prop()
  username: string;
  @Prop()
  email: string;
  _id?: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

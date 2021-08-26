import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
})
export class Product {
  @Prop()
  name: string;
  @Prop()
  description?: string;
  @Prop()
  seller: string;
  @Prop()
  count: number;
  @Prop()
  price: number;
  @Prop()
  image: string;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
})
export class Purchase {
  @Prop()
  customer: string;
  @Prop()
  seller?: string;
  @Prop()
  product: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  image: string;
}

export type PurchaseDocument = Purchase & Document;

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);

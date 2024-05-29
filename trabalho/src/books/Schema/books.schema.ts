import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Books>;

@Schema()
export class Books {
  @Prop()
  name: string;
  @Prop()
  value: number;
  @Prop()
  pageQuantity : number;
}

export const BookSchema = SchemaFactory.createForClass(Books);

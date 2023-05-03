import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
  authorId?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);

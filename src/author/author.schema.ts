import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Book } from 'src/books/entities/book.entity';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }] })
  books: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);

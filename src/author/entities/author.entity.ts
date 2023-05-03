import { ObjectType, Field } from '@nestjs/graphql';
import { Book } from 'src/books/entities/book.entity';

@ObjectType()
export class Author {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Book])
  books: Book[];
}

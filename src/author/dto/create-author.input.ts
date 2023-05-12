import { InputType, Field } from '@nestjs/graphql';
import { Book } from 'src/books/entities/book.entity';

@InputType()
export class CreateAuthorInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Book])
  books?: Book[];
}

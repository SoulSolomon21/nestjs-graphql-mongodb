import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  title: string;

  @Field()
  author?: string;

  @Field()
  authorId?: string;
}

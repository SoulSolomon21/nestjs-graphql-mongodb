import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './author.schema';
import { BooksService } from 'src/books/books.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
  providers: [AuthorResolver, AuthorService, BooksService],
})
export class AuthorModule {}

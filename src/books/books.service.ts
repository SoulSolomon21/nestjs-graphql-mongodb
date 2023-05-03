import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './books.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private bookModel: Model<Book>) {}

  async create(createBookInput: CreateBookInput) {
    const createdBook = new this.bookModel(createBookInput);
    return await createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

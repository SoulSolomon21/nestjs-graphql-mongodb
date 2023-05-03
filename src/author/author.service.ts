import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './author.schema';

@Injectable()
export class AuthorService {
  constructor(@InjectModel('Author') private authorModel: Model<Author>) {}

  async create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorInput);
    return await createdAuthor.save();
  }

  async findAll(): Promise<Author[]> {
    return await this.authorModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}

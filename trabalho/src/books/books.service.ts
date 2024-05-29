import { Model } from 'mongoose';
import { CreateBook } from './dto/createbook.dto';
import { Books, BookDocument } from './Schema/books.schema'

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class BooksService {
    constructor(@InjectModel(Books.name) private bookModel: Model<BookDocument>) {}
    async create(createBookDto: CreateBook): Promise<Books> {
        const createdBook = new this.bookModel(createBookDto);
        return createdBook.save();
    }
    async findAll(): Promise<Books[]> {
        return this.bookModel.find().exec();
    }
}
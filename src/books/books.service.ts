import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async getAll(): Promise<Book[]> {
    return await this.booksRepository.find();
  }

  async findOneBook(_id: number): Promise<Book> {
    return await this.booksRepository.findOne({ id: _id });
  }

  async createBook(book: Book): Promise<Book> {
    return await this.booksRepository.save(book);
  }

  async deleteBook(_id: number): Promise<void> {
    await this.booksRepository.delete({ id: _id });
  }

  async updateBook(_id: number, book: Book): Promise<void> {
    await this.booksRepository.update({ id: _id }, book);
  }
}

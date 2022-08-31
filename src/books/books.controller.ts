import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOneBook(@Param('id') id): Promise<Book> {
    return this.booksService.findOneBook(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.createBook(createBookDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteBook(@Param('id') id): Promise<void> {
    return this.booksService.deleteBook(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateBook(
    @Body() updateBookDto: CreateBookDto,
    @Param('id') id
  ): Promise<void> {
    return this.booksService.updateBook(id, updateBookDto);
  }
}

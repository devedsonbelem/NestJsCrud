import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Delete,
  Put,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('books')
  getBooks(@Request() req) {
    return req.books;
  }

  @UseGuards(JwtAuthGuard)
  @Get('books/*')
  getBooksBy(@Request() req) {
    return req.books;
  }

  @UseGuards(JwtAuthGuard)
  @Post('books')
  createBooks(@Request() req) {
    return req.books;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('books/*')
  deleteBooks(@Request() req) {
    return req.books;
  }

  @UseGuards(JwtAuthGuard)
  @Put('books/*')
  updateBooks(@Request() req) {
    return req.books;
  }
}

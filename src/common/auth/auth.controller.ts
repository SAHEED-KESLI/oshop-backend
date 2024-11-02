import { Controller, Get, UseGuards } from '@nestjs/common';
import JwtAuthGuard from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  //
  @UseGuards(JwtAuthGuard)
  @Get()
  isAuthenticated() {
    return true;
  }
}

import { UsersService } from 'src/users/users.service';
import { Controller, Get, Res, Request, Post, UseGuards, Body, HttpCode } from '@nestjs/common';
import { join } from 'path';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { User } from './users/user.entity';
import { Md5 } from 'ts-md5';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
    ) {}

  @Get()
  getAngular(@Res() response): void {
    return response.sendFile(join(__dirname, "../public_html/")) ;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(200)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/me')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('auth/cadastrar')
  async testParam(@Body() req) {
    let userDto = req;
    let user = new User();

    // try {
      user.username = userDto.username;
      user.password = Md5.hashStr(userDto.password);
      let usuario = await this.usersService.add(user);
      let {password, ...result} = usuario;
      return result;
    // } catch (error) {
    //   throw new Error("Username/password inválidos.");
    // }


  }
}

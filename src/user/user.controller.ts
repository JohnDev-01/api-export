import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): any {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: any): any {
    return this.userService.create(user);
  }
}

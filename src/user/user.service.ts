import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): any {
    return {
      name: 'John Kerlin Silvestre',
    };
  }

  create(user: any): any {
    return {
      status: `user ${user} has created`,
    };
  }
}

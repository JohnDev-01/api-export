import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
  constructor(
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

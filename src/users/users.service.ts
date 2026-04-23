import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {}
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  create(user: any) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, updatedUser: any) {
    this.users[id] = updatedUser;
    return updatedUser;
  }

  remove(id: number) {
    const user = this.users[id];
    this.users.splice(id, 1);
    return user;
  }
}
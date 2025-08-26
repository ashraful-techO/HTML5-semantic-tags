import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class UsersService {
  private store = new Map<number, User>();

  constructor() {
    console.log('User store initialized');
  }

  addUser(user: User) {
    this.store.set(user.id, user);
  }

  getUser(id: number) {
    return this.store.get(id) || null;
  }

  getUsers() {
    return Array.from(this.store.values());
  }

  updateUser(id: number, user: User) {
    this.store.set(id, user);
  }

  deleteUser(id: number) {
    this.store.delete(id);
  }
}

import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

let USERS: CreateUserDTO[] = [];

@Controller('/users')
export class UsersController {
  @Post()
  addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return 'User Added';
  }

  @Get()
  getUsers() {
    return USERS;
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return USERS.find((u) => +u.id === +id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO) {
    const userIdx = USERS.findIndex((u) => u.id === +id);

    if (!userIdx) {
      return { message: 'User not found' };
    }

    USERS[userIdx] = updateUserDTO;
    return { message: 'User updated' };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    USERS = USERS.filter((user) => +user.id === +id);

    return { message: 'User deleted' };
  }
}

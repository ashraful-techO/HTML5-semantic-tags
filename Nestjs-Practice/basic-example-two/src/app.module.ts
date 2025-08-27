import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import {UsersController} from './users/users.controller';
import { RandomProvider } from './users/providers/random-id.provider';


@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, RandomProvider],
})
export class AppModule {}

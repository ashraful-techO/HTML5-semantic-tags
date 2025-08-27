import { Body, Controller, Get,Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('users')
export class UsersController{
    constructor(private usersService: UsersService){}


    @Get()
    @UseGuards(AuthGuard)
    getUsers(){
        return this.usersService.findAll();
    }

    @Post()
    createUser(@Body() body: {name: string; email: string}){
        return this.usersService.create(body);
    }

}
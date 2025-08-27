import { Controller, Param, Get, Query } from "@nestjs/common";
import {ApiOperation, ApiQuery, ApiTags} from '@nestjs/swagger';
import { UsersService } from "./users.service";

@ApiTags('Users')
@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService){}

    @Get(':userId/orders/:orderId')
    @ApiOperation({summary: 'Get user order by ID'})
    getOrder(
        @Param('userId') userId: string,
        @Param('orderId') orderId: string,
    ) {
        return this.usersService.getUserOrders(userId,orderId);
    }

    @Get()
    @ApiOperation({summary: 'Search User by query'})
    @ApiQuery({name: 'age', required: false})
    @ApiQuery({name: 'role', required: false})
    search(@Query('age') age?:string, @Query('role') role?:string){
        return this.usersService.searchUsers(age,role);
    }

}
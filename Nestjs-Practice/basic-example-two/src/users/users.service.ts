import { Inject, Injectable } from "@nestjs/common";
import { RAMDOM_ID } from "./providers/random-id.provider";

@Injectable()
export class UsersService{
    constructor(@Inject(RAMDOM_ID) private readonly randomId: number) {}

    getUserOrders( userId: string, orderId: string){
        return {
            userId,
            orderId,
            randomId: this.randomId
        };
    }

    searchUsers(age?:string, role?:string){
        return {
            message: `Searching users with age=${age} & role=${role}`,
        };
    }
}
import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";

@Injectable()
export class UsersService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findAll(): Promise<User[]>{
        return this.userModel.find().exec();
    }

    async create(user: Partial<User>): Promise<User>{
        const newUser = new this.userModel(user);
        return newUser.save();
    }
}
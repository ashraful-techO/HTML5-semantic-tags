import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateUserDto{
    @IsOptional()
    @IsString()
    name?:string;


    @IsOptional()
    @IsString()
    email?:string;

    @IsOptional()
    @IsInt()
    @Min(18)
    @Max(65)
    age?:number;
}
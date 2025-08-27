import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'Shanto', email: 'Shanto@gmail.com' },
    { id: 2, name: 'Pranto', email: 'Nasif@gmail.com' },
  ];

  findAll(){
    return this.users;
  }

  findOne(id:number){
    return this.users.find((u)=>u.id ===id);
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length +1,
      ...createUserDto,
    };
    this.users.push(newUser);
    console.log("User Added");
    return newUser;
  }

  update(id: number ,updateUserDto: UpdateUserDto){
    const user = this.findOne(id);

    if(!user){
      throw new NotFoundException(`user with ${id} not found`);
    }
    Object.assign(user,updateUserDto);
    return user;
  }

  remove(id: number){
    const userIdx = this.users.findIndex((u)=> u.id === id);

    if(userIdx === -1){
      throw new NotFoundException(`User with ${id} not found`);
    }

    const deletUser = this.users.splice(userIdx,1);
    return deletUser[0];
  }

}

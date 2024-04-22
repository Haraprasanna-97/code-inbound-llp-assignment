import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  // Inject users repositoty
  constructor(@InjectRepository(Users) private readonly userRepository : Repository<Users>) {}

  create(createUserDto: CreateUserDto) : Promise<Users> {
    let user = new Users()
    user.username = createUserDto.username
    user.password = createUserDto.password
    return this.userRepository.save(user)
  }

  findAll() : Promise<Users[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({where : {id : id}});
  }
  
  findby(username: string) {
    return this.userRepository.findOne({select : ["username", "password"], where : {username : username}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user = new Users()
    user.username = updateUserDto.username
    user.password = updateUserDto.password
    user.id = id
    return this.userRepository.save(user)
  }

  remove(id: number) {
    return this.userRepository.delete(id)
  }
}

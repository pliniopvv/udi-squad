import { Injectable } from '@nestjs/common';
import { CreateUserComplementDto } from './dto/create-user-complement.dto';
import { UpdateUserComplementDto } from './dto/update-user-complement.dto';
import { UserComplement } from './entities/user-complement.entity';
import {  Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserComplementsService {
  constructor(
    @InjectRepository(UserComplement)
    private userComponentRepository: Repository<UserComplement>,
  ) {}

  create(createUserComplementDto: CreateUserComplementDto) {
    return this.userComponentRepository.save(createUserComplementDto);
  }

  findAll() {
    return this.userComponentRepository.find({
      relations: {
        user: true
      }
    });
  }

  findOne(id: number) {
    // return this.userComponentRepository.findOneBy({ id: Equal(id) });
    return this.userComponentRepository
    .createQueryBuilder("UserComponents")
    .leftJoinAndSelect("UserComponents.user", "user")
    .where("UserComponents.id = :id", { id })
    .getOne();
  }

  async update(id: number, updateUserComplementDto: UpdateUserComplementDto) {
    let ret = await this.userComponentRepository.update({ id: Equal(id) }, updateUserComplementDto);
    if (ret && ret?.affected >= 1)
      return true;
    else
      return false;
  }

  remove(id: number) {
    return this.userComponentRepository.delete({id: Equal(id)});
  }

}

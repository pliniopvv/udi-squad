import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: {
        complements: true
      }
    });
  }

   findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne({
      relations:
      {
        complements: true
      },
      where: {
        id: Equal(id)
      }
    });
  }

  findByLogin(username: String) {
    // return this.usersRepository.findOneBy({ username: Equal(_username) });
    return this.usersRepository
    .createQueryBuilder('user')
    .select(["user.id","user.username"])
    .addSelect("user.password")
    .where("user.username = :username", { username })
    .getOne();
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async add(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }
}
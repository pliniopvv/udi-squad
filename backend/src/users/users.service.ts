import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ userId: id });
  }

  findByLogin(_username: String) {
    return this.usersRepository.findOneBy({ username: Equal(_username) });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async add(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }
}
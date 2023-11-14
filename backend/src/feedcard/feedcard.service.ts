import { Injectable } from '@nestjs/common';
import { CreateFeedcardDto } from './dto/create-feedcard.dto';
import { UpdateFeedcardDto } from './dto/update-feedcard.dto';
import { Equal, Repository } from 'typeorm';
import { Feedcard } from './entities/feedcard.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedcardService {
  constructor(
    @InjectRepository(Feedcard)
    private feedcardRepository: Repository<Feedcard>,
  ) {}

  async create(createFeedcardDto: CreateFeedcardDto) {
    return this.feedcardRepository.save(createFeedcardDto);
  }

  findAll() {
    // return this.feedcardRepository.find({
    //   relations: {
    //     user: true
    //   }
    // });
    return this.feedcardRepository.createQueryBuilder('feedcard')
    .leftJoinAndSelect("feedcard.user","user")
    .leftJoinAndSelect("user.complements","complements")
    .getMany();
  }

  findOne(id: number) {
    // return this.feedcardRepository.findBy({ id: Equal(id) });
    return this.feedcardRepository.createQueryBuilder('feedcard')
    .where("feedcard.id = :id", { id })
    .leftJoinAndSelect("feedcard.user","user")
    .leftJoinAndSelect("user.complements","complements")
    .getOne();
  }

  update(id: number, updateFeedcardDto: UpdateFeedcardDto) {
    return this.feedcardRepository.update({ id: Equal(id) }, updateFeedcardDto);
  }

  remove(id: number) {
    return this.feedcardRepository.delete({id: Equal(id)});
  }
}

function toFeedcard(dto: CreateFeedcardDto): Feedcard {
  let f = new Feedcard();
  f.body = dto.body;
  f.user = dto.user;
  f.created_at = dto.created_at;
  return f;
}

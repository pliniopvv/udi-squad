import { Injectable } from '@nestjs/common';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';
import { DataSource, Equal, Repository } from 'typeorm';
import { Foto } from './entities/foto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FotoService {
  constructor(
    @InjectRepository(Foto)
    private fotoRepository: Repository<Foto>,
  ) {}

  create(createFotoDto: CreateFotoDto) {
    return this.fotoRepository.save(createFotoDto);
  }

  findAll() {
    return this.fotoRepository.find();
  }

  findOne(id: number) {
    return this.fotoRepository.findBy({ id: Equal(id) });
  }

  update(id: number, updateFotoDto: UpdateFotoDto) {
    return this.fotoRepository.update({ id: Equal(id) }, updateFotoDto);
  }

  remove(id: number) {
    return this.fotoRepository.delete({id: Equal(id)});
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FotoService } from './foto.service';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';

@Controller('api/foto')
export class FotoController {
  constructor(private readonly fotoService: FotoService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  create(@Body() createFotoDto: CreateFotoDto) {
    return this.fotoService.create(createFotoDto);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.fotoService.findAll();
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.fotoService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateFotoDto: UpdateFotoDto) {
    return this.fotoService.update(+id, updateFotoDto);
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.fotoService.remove(+id);
  }
}

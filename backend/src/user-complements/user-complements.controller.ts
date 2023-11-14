import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserComplementsService } from './user-complements.service';
import { CreateUserComplementDto } from './dto/create-user-complement.dto';
import { UpdateUserComplementDto } from './dto/update-user-complement.dto';

@Controller('api/user-complements')
export class UserComplementsController {
  constructor(private readonly userComplementsService: UserComplementsService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  create(@Body() createUserComplementDto: CreateUserComplementDto) {
    return this.userComplementsService.create(createUserComplementDto);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.userComplementsService.findAll();
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.userComplementsService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserComplementDto: UpdateUserComplementDto) {
    return this.userComplementsService.update(+id, updateUserComplementDto);
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.userComplementsService.remove(+id);
  }
}

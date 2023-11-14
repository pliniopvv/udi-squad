import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FeedcardService } from './feedcard.service';
import { CreateFeedcardDto } from './dto/create-feedcard.dto';
import { UpdateFeedcardDto } from './dto/update-feedcard.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/feedcard')
export class FeedcardController {
  constructor(private readonly feedcardService: FeedcardService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  create(@Body() createFeedcardDto: CreateFeedcardDto) {
  createFeedcardDto.created_at = new Date();
    return this.feedcardService.create(createFeedcardDto);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.feedcardService.findAll();
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.feedcardService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateFeedcardDto: UpdateFeedcardDto) {
    return this.feedcardService.update(+id, updateFeedcardDto);
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.feedcardService.remove(+id);
  }
}

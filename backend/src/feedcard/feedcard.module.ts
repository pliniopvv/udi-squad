import { Module } from '@nestjs/common';
import { FeedcardService } from './feedcard.service';
import { FeedcardController } from './feedcard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedcard } from './entities/feedcard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedcard])],
  controllers: [FeedcardController],
  providers: [FeedcardService],
  exports: [FeedcardService]
})
export class FeedcardModule {}

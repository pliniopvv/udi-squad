import { Module } from '@nestjs/common';
import { UserComplementsService } from './user-complements.service';
import { UserComplementsController } from './user-complements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserComplement } from './entities/user-complement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserComplement])],
  controllers: [UserComplementsController],
  providers: [UserComplementsService],
  exports: [UserComplementsService]
})
export class UserComplementsModule {}

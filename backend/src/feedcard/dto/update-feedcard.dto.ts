import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedcardDto } from './create-feedcard.dto';

export class UpdateFeedcardDto extends PartialType(CreateFeedcardDto) {
}

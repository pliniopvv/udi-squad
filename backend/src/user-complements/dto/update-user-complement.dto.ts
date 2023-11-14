import { PartialType } from '@nestjs/mapped-types';
import { CreateUserComplementDto } from './create-user-complement.dto';

export class UpdateUserComplementDto extends PartialType(CreateUserComplementDto) {}

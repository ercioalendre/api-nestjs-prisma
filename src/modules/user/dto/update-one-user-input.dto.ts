import { PartialType } from '@nestjs/swagger';
import { Type } from '@nestjs/common';
import { UserBaseInputDto } from './user-base-input.dto';

export class UpdateOneUserInputDto extends PartialType(
  UserBaseInputDto as Type<UserBaseInputDto>,
) {}

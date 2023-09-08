import { PartialType } from '@nestjs/mapped-types';
import { Type } from '@nestjs/common';
import { UserBaseInputDto } from './user-base-input.dto';

export class UpdateUserInputDto extends PartialType(
  UserBaseInputDto as Type<UserBaseInputDto>,
) {}

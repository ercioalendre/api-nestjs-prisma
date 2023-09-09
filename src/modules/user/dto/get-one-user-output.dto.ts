import { PartialType } from '@nestjs/mapped-types';
import { Type } from '@nestjs/common';
import { UserBaseOutputDto } from './user-base-output.dto';

export class GetOneUserOutputDto extends PartialType(
  UserBaseOutputDto as Type<UserBaseOutputDto>,
) {}

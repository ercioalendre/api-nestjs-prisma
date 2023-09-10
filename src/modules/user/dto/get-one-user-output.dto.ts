import { PartialType } from '@nestjs/swagger';
import { Type } from '@nestjs/common';
import { UserBaseOutputDto } from './user-base-output.dto';

export class GetOneUserOutputDto extends PartialType(
  UserBaseOutputDto as Type<UserBaseOutputDto>,
) {}

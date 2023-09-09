import { Type } from '@nestjs/common';
import { UserBaseOutputDto } from './user-base-output.dto';
import { PartialType } from '@nestjs/mapped-types';

export abstract class UpdateOneUserModelDto extends PartialType(
  UserBaseOutputDto as Type<UserBaseOutputDto>,
) {
  public readonly updatedAt: Date;

  public readonly updatedBy?: string | null;
}

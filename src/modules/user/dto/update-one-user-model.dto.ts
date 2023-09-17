import { Type } from '@nestjs/common';
import { UpdateOneUserInputDto } from './update-one-user-input.dto';
import { PartialType } from '@nestjs/mapped-types';

export abstract class UpdateOneUserModelDto extends PartialType(
  UpdateOneUserInputDto as Type<UpdateOneUserInputDto>,
) {
  public readonly updatedAt: Date;

  public readonly updatedBy?: string | null;
}

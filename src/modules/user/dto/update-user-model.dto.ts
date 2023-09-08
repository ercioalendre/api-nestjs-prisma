import { UserBaseInputDto } from './user-base-input.dto';

export abstract class UpdateUserModelDto extends UserBaseInputDto {
  public readonly updatedAt: Date;

  public readonly updatedBy?: string | null;
}

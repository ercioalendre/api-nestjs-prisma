import { UserBaseInputDto } from './user-base-input.dto';

export abstract class CreateOneUserModelDto extends UserBaseInputDto {
  public readonly id: string;

  public readonly isActive: boolean;

  public readonly createdAt: Date;

  public readonly createdBy?: string | null;
}

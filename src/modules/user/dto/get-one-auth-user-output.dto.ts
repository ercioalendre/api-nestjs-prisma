import { UserBaseOutputDto } from './user-base-output.dto';

export class GetOneAuthUserOutputDto extends UserBaseOutputDto {
  public readonly password: string;
  public readonly token: string;
}

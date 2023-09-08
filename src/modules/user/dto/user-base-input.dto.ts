import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export abstract class UserBaseInputDto {
  @IsString()
  @IsNotEmpty()
  public readonly fullName: string;

  @IsString()
  @IsOptional()
  public readonly nickname?: string | null;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  public readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  public readonly password: string;
}

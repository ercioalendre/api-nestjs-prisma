import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export abstract class SignInUserInputDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail do usuário.',
    example: 'john.doe@system.com',
  })
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  @MinLength(8)
  @MaxLength(64)
  @ApiProperty({
    description: 'Senha do usuário.',
    example: 'FQkh:+oUY*7ccP0t',
  })
  public readonly password: string;
}

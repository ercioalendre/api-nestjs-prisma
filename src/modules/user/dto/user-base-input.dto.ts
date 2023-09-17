import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export abstract class UserBaseInputDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome completo do usuário.',
    example: 'John Doe',
  })
  public readonly fullName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Apelido do usuário.',
    example: 'John D.',
  })
  public readonly nickname?: string | null;

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
  @IsPhoneNumber()
  @ApiProperty({
    description: 'Telefone do usuário.',
    example: '+5511987654321',
  })
  public readonly phone: string;

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

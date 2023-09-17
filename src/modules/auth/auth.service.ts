import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StaticErrors } from 'src/utilities/static-errors';
import { compare } from 'bcrypt';
import { UserRepository } from '../user/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import { SignInUserInputDto } from './dto/sign-in-user-input.dto';
import { AuthUserOutputDto } from './dto/auth-user-output.dto';
import { AuthUserInputDto } from './dto/auth-user-input.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signInUser(signInUserInputDto: SignInUserInputDto): Promise<any> {
    const user = await this.userRepository.getOneAuth(signInUserInputDto.email);

    if (!user || !user.isActive) {
      throw new UnauthorizedException(StaticErrors.INVALID_CREDENTIALS);
    }

    const passwordComparison = await compare(
      signInUserInputDto.password,
      user.password,
    );

    if (!passwordComparison) {
      throw new UnauthorizedException(StaticErrors.INVALID_CREDENTIALS);
    }

    const token = await this.jwtService.signAsync(
      { email: user.email },
      {
        subject: user.id,
        expiresIn: '1d',
        audience: 'signIn',
      },
    );

    await this.userRepository.updateOneById(user.id, {
      token,
      updatedAt: new Date(),
      updatedBy: user.id,
    });

    return { token };
  }

  public async me(
    authUserInputDto: AuthUserInputDto,
  ): Promise<AuthUserOutputDto> {
    if (!authUserInputDto.id) {
      throw new UnauthorizedException(StaticErrors.INVALID_CREDENTIALS);
    }

    const { token, password, ...authUserOutputDto } = authUserInputDto;

    return authUserOutputDto;
  }
}

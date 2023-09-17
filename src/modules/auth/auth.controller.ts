import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignInUserInputDto } from './dto/sign-in-user-input.dto';
import { AppController } from 'src/app.controller';
import { SignInUserOutputDto } from './dto/sign-in-user-output.dto';
import { Public } from 'src/decorators/public.decorator';
import { AuthUserOutputDto } from './dto/auth-user-output.dto';
import { Request } from 'express';

@Controller('auth')
@ApiTags('Auth')
export class AuthController extends AppController {
  constructor(private readonly authService: AuthService) {
    super();
  }

  @Public()
  @Post('sign-in')
  @ApiOperation({
    summary: 'Authenticates an user.',
  })
  public async signInUser(
    @Body() signInUserInputDto: SignInUserInputDto,
  ): Promise<SignInUserOutputDto> {
    return await this.authService.signInUser(signInUserInputDto);
  }

  @Get('me')
  @ApiOperation({
    summary: 'Validate an authenticated user.',
  })
  public async me(@Req() request: Request): Promise<AuthUserOutputDto> {
    const sessionUser = request['sessionUser'];

    return await this.authService.me(sessionUser);
  }
}

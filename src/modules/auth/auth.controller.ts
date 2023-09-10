import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignInUserInputDto } from './dto/sign-in-user-input.dto';
import { AppController } from 'src/app.controller';
import { SignInUserOutputDto } from './dto/sign-in-user-output.dto';
import { Public } from 'src/decorators/public.decorator';

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
}

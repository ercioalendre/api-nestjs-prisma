import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateOneUserInputDto } from './dto/create-one-user-input.dto';
import { UpdateOneUserInputDto } from './dto/update-one-user-input.dto';
import { UpdateOneUserOutputDto } from './dto/update-one-user-output.dto';
import { GetManyUserOutputDto } from './dto/get-many-user-output.dto';
import { GetOneUserOutputDto } from './dto/get-one-user-output.dto';
import { DeleteOneUserOutputDto } from './dto/delete-one-user-output.dto';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
@ApiBadRequestResponse({
  description: 'Bad Request',
  schema: {
    example: {
      code: 'Error code' || null,
      message: 'Error message.',
      path: '/user/some-url-path',
      dateTime: new Date(),
    },
  },
})
@ApiUnauthorizedResponse({
  description: 'Unauthorized',
})
@ApiForbiddenResponse({
  description: 'Forbidden',
})
@ApiNotFoundResponse({
  description: 'Not found',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-one')
  @ApiOperation({
    summary: 'Creates one single user.',
  })
  public async createOne(@Body() createUserInputDto: CreateOneUserInputDto) {
    return await this.userService.createOne(createUserInputDto);
  }

  @Get('get-many')
  @ApiOperation({
    summary: 'Gets many users.',
  })
  public async getMany(): Promise<GetManyUserOutputDto[]> {
    return await this.userService.getAll();
  }

  @Get('get-one/id/:id')
  @ApiOperation({
    summary: 'Gets one single user by ID.',
  })
  public async getOneById(
    @Param('id') id: string,
  ): Promise<GetOneUserOutputDto | null> {
    return await this.userService.getOneById(id);
  }

  @Patch('update-one/id/:id')
  @ApiOperation({
    summary: 'Updates one single user by ID.',
  })
  public async updateOneById(
    @Param('id') id: string,
    @Body() body: UpdateOneUserInputDto,
  ): Promise<UpdateOneUserOutputDto> {
    return this.userService.updateOneById(id, body);
  }

  @Delete('delete-one/id/:id')
  @ApiOperation({
    summary: 'Deletes one single user by ID.',
  })
  public async deleteOne(
    @Param('id') id: string,
  ): Promise<DeleteOneUserOutputDto> {
    return await this.userService.deleteOneById(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { CreateOneUserInputDto } from '@modules/user/dto/create-one-user-input.dto';
import { UpdateOneUserInputDto } from '@modules/user/dto/update-one-user-input.dto';
import { UpdateOneUserOutputDto } from '@modules/user/dto/update-one-user-output.dto';
import { GetManyUserOutputDto } from '@modules/user/dto/get-many-user-output.dto';
import { GetOneUserOutputDto } from '@modules/user/dto/get-one-user-output.dto';
import { DeleteOneUserOutputDto } from '@modules/user/dto/delete-one-user-output.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppController } from '@src/app.controller';
import { Public } from '@decorators/public.decorator';

@Controller('user')
@ApiTags('User')
export class UserController extends AppController {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Public()
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

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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-one')
  public async createOne(@Body() createUserInputDto: CreateOneUserInputDto) {
    return await this.userService.createOne(createUserInputDto);
  }

  @Get('get-many')
  public async getMany(): Promise<GetManyUserOutputDto[]> {
    return await this.userService.getAll();
  }

  @Get('get-one/:id')
  public async getOne(
    @Param('id') id: string,
  ): Promise<GetOneUserOutputDto | null> {
    return await this.userService.getOneById(id);
  }

  @Patch('update-one/:id')
  public async updateOne(
    @Param('id') id: string,
    @Body() body: UpdateOneUserInputDto,
  ): Promise<UpdateOneUserOutputDto> {
    return this.userService.updateOne(id, body);
  }

  @Delete('delete-one/:id')
  public async deleteOne(
    @Param('id') id: string,
  ): Promise<DeleteOneUserOutputDto> {
    return await this.userService.deleteOneById(id);
  }
}

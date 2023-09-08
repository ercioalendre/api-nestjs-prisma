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
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { UpdateUserInputDto } from './dto/update-user-input.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-one')
  public async createOne(@Body() createUserInputDto: CreateUserInputDto) {
    return await this.userService.createOne(createUserInputDto);
  }

  // @Get()
  // public async findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // public async findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // public async update(
  //   @Param('id') id: string,
  //   @Body() updateUserDto: UpdateUserInputDto,
  // ) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // public async remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserOutputDto } from '../dto/create-user-output.dto';
import { CreateUserModelDto } from '../dto/create-user-model.dto';
import { UpdateUserOutputDto } from '../dto/update-user-output.dto';
import { UpdateUserModelDto } from '../dto/update-user-model.dto';
import { DeleteUserOutputDto } from '../dto/delete-user-output.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async createOne(
    createUserModelDto: CreateUserModelDto,
  ): Promise<CreateUserOutputDto> {
    return this.prismaService.user.create({
      data: createUserModelDto,
    });
  }

  public async getAll(): Promise<CreateUserOutputDto[]> {
    return this.prismaService.user.findMany();
  }

  public async getOne(id: string): Promise<CreateUserOutputDto> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async updateOne(
    id: string,
    updateUserModelDto: UpdateUserModelDto,
  ): Promise<UpdateUserOutputDto> {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserModelDto,
    });
  }

  public async deleteOne(id: string): Promise<DeleteUserOutputDto> {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}

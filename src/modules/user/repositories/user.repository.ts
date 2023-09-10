import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOneUserOutputDto } from '../dto/create-one-user-output.dto';
import { CreateOneUserModelDto } from '../dto/create-one-user-model.dto';
import { UpdateOneUserOutputDto } from '../dto/update-one-user-output.dto';
import { UpdateOneUserModelDto } from '../dto/update-one-user-model.dto';
import { DeleteOneUserOutputDto } from '../dto/delete-one-user-output.dto';

@Injectable()
export class UserRepository {
  private readonly selectWithoutPasswordAndToken = {
    id: true,
    fullName: true,
    nickname: true,
    email: true,
    phone: true,
    password: false,
    token: false,
    isActive: true,
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
    isActiveChangedAt: true,
    isActiveChangedBy: true,
  };

  constructor(private readonly prismaService: PrismaService) {}

  public async createOne(
    createUserModelDto: CreateOneUserModelDto,
  ): Promise<CreateOneUserOutputDto> {
    return this.prismaService.user.create({
      data: createUserModelDto,
    });
  }

  public async getAll(): Promise<CreateOneUserOutputDto[]> {
    return this.prismaService.user.findMany({
      select: this.selectWithoutPasswordAndToken,
    });
  }

  public async getOneById(id: string): Promise<CreateOneUserOutputDto> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: this.selectWithoutPasswordAndToken,
    });
  }

  public async getOneByEmail(email: string): Promise<CreateOneUserOutputDto> {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
      select: this.selectWithoutPasswordAndToken,
    });
  }

  public async getOneAuth(email: string): Promise<CreateOneUserOutputDto> {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async updateOneById(
    id: string,
    updateUserModelDto: UpdateOneUserModelDto,
  ): Promise<UpdateOneUserOutputDto> {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserModelDto,
    });
  }

  public async deleteOneById(id: string): Promise<DeleteOneUserOutputDto> {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}

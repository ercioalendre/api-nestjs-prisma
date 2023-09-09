import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOneUserInputDto } from './dto/create-one-user-input.dto';
import { UserRepository } from './repositories/user.repository';
import { CreateOneUserOutputDto } from './dto/create-one-user-output.dto';
import { randomUUID } from 'crypto';
import { CreateOneUserModelDto } from './dto/create-one-user-model.dto';
import { GetManyUserOutputDto } from './dto/get-many-user-output.dto';
import { UpdateOneUserModelDto } from './dto/update-one-user-model.dto';
import { UpdateOneUserOutputDto } from './dto/update-one-user-output.dto';
import { DeleteOneUserOutputDto } from './dto/delete-one-user-output.dto';
import { GetOneUserOutputDto } from './dto/get-one-user-output.dto';
import { UpdateOneUserInputDto } from './dto/update-one-user-input.dto';
import { hash } from 'bcrypt';
import { StaticErrors } from 'src/utilities/static-errors';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createOne(
    createOneUserInputDto: CreateOneUserInputDto,
  ): Promise<CreateOneUserOutputDto> {
    const hashedPassword = await hash(createOneUserInputDto.password, 12);

    const userToCreateModel: CreateOneUserModelDto = {
      ...createOneUserInputDto,
      id: randomUUID(),
      isActive: true,
      createdAt: new Date(),
      createdBy: null,
      password: hashedPassword,
    };

    return this.userRepository.createOne(userToCreateModel);
  }

  public async getAll(): Promise<GetManyUserOutputDto[]> {
    return this.userRepository.getAll();
  }

  public async getOneById(id: string): Promise<GetOneUserOutputDto> {
    const user = await this.userRepository.getOneById(id);

    if (!user) {
      throw new NotFoundException(
        StaticErrors.THE_USER_YOU_ARE_LOOKING_FOR_RELATED_TO_THE_GIVEN_ID_DOES_NOT_EXIST,
      );
    }

    return user;
  }

  public async updateOne(
    id: string,
    updateOneUserModelDto: UpdateOneUserInputDto,
  ): Promise<UpdateOneUserOutputDto> {
    const user = await this.userRepository.getOneById(id);

    if (!user) {
      throw new NotFoundException(
        StaticErrors.THE_USER_YOU_ARE_TRYING_TO_UPDATE_RELATED_TO_THE_GIVEN_ID_DOES_NOT_EXIST,
      );
    }

    const userToUpdateModel: UpdateOneUserModelDto = {
      updatedAt: new Date(),
      updatedBy: null,
      ...updateOneUserModelDto,
    };

    return this.userRepository.updateOne(id, userToUpdateModel);
  }

  public async deleteOneById(id: string): Promise<DeleteOneUserOutputDto> {
    const user = await this.userRepository.getOneById(id);

    if (!user) {
      throw new NotFoundException(
        StaticErrors.THE_USER_YOU_ARE_TRYING_TO_DELETE_RELATED_TO_THE_GIVEN_ID_DOES_NOT_EXIST,
      );
    }

    return this.userRepository.deleteOneById(id);
  }
}

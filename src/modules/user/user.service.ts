import { Injectable } from '@nestjs/common';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { UserRepository } from './repositories/user.repository';
import { CreateUserOutputDto } from './dto/create-user-output.dto';
import { randomUUID } from 'crypto';
import { CreateUserModelDto } from './dto/create-user-model.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createOne(
    createUserInputDto: CreateUserInputDto,
  ): Promise<CreateUserOutputDto> {
    const newUserModel: CreateUserModelDto = {
      id: randomUUID(),
      isActive: true,
      createdAt: new Date(),
      createdBy: null,
      ...createUserInputDto,
    };

    return this.userRepository.createOne(newUserModel);
  }
}

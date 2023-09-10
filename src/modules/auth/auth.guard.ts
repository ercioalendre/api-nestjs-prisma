import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { StaticErrors } from 'src/utilities/static-errors';
import { UserRepository } from '../user/repositories/user.repository';
import { IS_PUBLIC_KEY } from 'src/decorators/public.decorator';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException(StaticErrors.INVALID_CREDENTIALS);
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_AUTH_SECRET,
      });

      const userExists = await this.userRepository.getOneAuth(payload.email);

      if (!userExists) {
        throw new UnauthorizedException(StaticErrors.INVALID_CREDENTIALS);
      }

      if (userExists.token !== token) {
        throw new UnauthorizedException(StaticErrors.INVALID_CREDENTIALS);
      }

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException(StaticErrors.INVALID_CREDENTIALS);
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}

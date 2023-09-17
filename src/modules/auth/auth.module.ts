import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_AUTH_SECRET,
      signOptions: {
        issuer: process.env.APP_NAME,
      },
    }),
  ],
  exports: [JwtModule],
})
export class AuthModule {}

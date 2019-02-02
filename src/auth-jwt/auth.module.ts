import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthJWTService } from './auth-jwt.service';
import { UserModule } from 'src/user/user.module';
import { AuthJwtController } from './auth-jwt.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule
  ],
  controllers: [AuthJwtController],
  providers: [AuthJWTService, JwtStrategy],
})
export class AuthModule {}
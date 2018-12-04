import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UserService } from './user.service';
import { AuthJwtController } from './auth-jwt/auth-jwt.controller';
import { AuthJWTService } from './auth-jwt/auth-jwt.service';
import { JwtStrategy } from './auth-jwt/jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600,
            },
        }),
    ],
    providers: [
        UserService,
        AuthJWTService,
        JwtStrategy,
    ],
    controllers: [AuthJwtController],
    exports: [UserService],
})
export class UserModule { }

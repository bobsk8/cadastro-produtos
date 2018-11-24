import { Module } from '@nestjs/common';
import { HttpStrategy } from './http.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
    UserModule,
  ],
  providers: [HttpStrategy, AuthService],
})
export class AuthModule {}
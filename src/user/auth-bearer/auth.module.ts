import { Module } from '@nestjs/common';
import { HttpStrategy } from './http.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserModule } from '../user.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
    UserModule,
  ],
  providers: [HttpStrategy, AuthService],
})
export class AuthModule {}
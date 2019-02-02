import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './interface/jwt-payload.interface';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthJWTService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async signIn(login: any): Promise<any> {
    let user = await this.validateUser(login);
    
    if (user.login) {
      const userToken = await this.createToken(user.email);
      user.token = userToken;
      return user;
    } else {
      return Promise.resolve({ login: false });
    }
  }

  async createToken(email: string) {
    const user: JwtPayload = { email };
    const accessToken = await this.jwtService.sign(user);
    return accessToken;    
  }

  async validateUser(payload: any): Promise<any> {
    return await this.usersService.findOneByEmailAndPass(payload);
  }

  async validateToken(token: any): Promise<any> {    
    return this.jwtService.decode(token);  
  }
}
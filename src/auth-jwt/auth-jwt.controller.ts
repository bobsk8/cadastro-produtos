import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthJWTService } from './auth-jwt.service';

@Controller('auth-jwt')
export class AuthJwtController {
    constructor(private readonly authJWTService: AuthJWTService) { }

    @Get('token')
    async createToken(): Promise<any> {
        return await this.authJWTService.createToken();
    }

    @Get('data')
    @UseGuards(AuthGuard())
    findAll() {
        // This route is restricted by AuthGuard
        // JWT strategy
    }
}

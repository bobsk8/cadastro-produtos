import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthJWTService } from './auth-jwt.service';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';

@Controller('auth-jwt')
export class AuthJwtController {
    constructor(private readonly authJWTService: AuthJWTService) { }

    @Get('token')
    async createToken(): Promise<any> {
        return await this.authJWTService.signIn();
    }

    @Get('login')
    async login(@Req() req): Promise<any> {
        return await this.authJWTService.signIn();
    }

    @Get('data')
    @UseGuards(JwtAuthGuard)
    findAll(@Req() req) {
        // This route is restricted by AuthGuard
        // JWT strategy
    }
}

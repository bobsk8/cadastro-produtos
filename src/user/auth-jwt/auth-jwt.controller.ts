import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthJWTService } from './auth-jwt.service';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';

@Controller('api/auth-jwt')
export class AuthJwtController {
    constructor(private readonly authJWTService: AuthJWTService) { }

    @Post('login')
    async login(@Req() req: any): Promise<any> {
        let login = req.body;
        return await this.authJWTService.signIn(login);
    }
}

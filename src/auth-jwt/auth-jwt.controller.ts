import { Controller, Post, Req, Get, UseGuards } from '@nestjs/common';
import { AuthJWTService } from './auth-jwt.service';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('api/auth-jwt')
export class AuthJwtController {
    constructor(
        private readonly authJWTService: AuthJWTService,
        private userService: UserService
        ) { }

    @Post('login')
    async login(@Req() req: any): Promise<any> {
        let login = req.body;
        return await this.authJWTService.signIn(login);
    }

    @Get('datas')
    @UseGuards(AuthGuard())
    async getUserDatas(@Req() req: any) {
        let userData = await this.getUserDataByToken(req);        
        if (userData && userData['email']) {
            return this.userService.findOneByEmail(userData['email']);
        }
        return { data: false }
    }

    getUserDataByToken(req: any) {
        if (req.headers && req.headers.authorization) {
            return this.authJWTService.validateToken(req.headers.authorization.substring(7));
        }
        return false;
    }
}

import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Controller('api/user')
export class UserController {

    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    @Get('datas')
    @UseGuards(AuthGuard())
    getUserDatas(@Req() req: any) {
        let userData = this.getUserDataByToken(req);
        if (userData && userData['email']) {
            return this.userService.findOneByEmail(userData['email']);
        }
        return { data: false }
    }

    getUserDataByToken(req: any) {
        if (req.headers && req.headers.authorization) {
            return this.jwtService.decode(req.headers.authorization.substring(7));
        }
        return false;
    }
}

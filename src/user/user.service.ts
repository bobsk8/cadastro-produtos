import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
    constructor() { }

    findOneByToken(token: any): Observable<any> {
        return of(true);
    }

    findOneByEmail(email: any) {
        return { name: 'Rodrigo ', email: 'user@email.com', login: true};;
    }

    findOneByEmailAndPass(login: any) {
        let user = {};
        user['login'] = false;
        if (login.username === 'bobsk8' && login.pass === 'vasco20') {
            user = { name: 'Rodrigo ', email: 'user@email.com', login: true};
        }
        return user;
    }
}

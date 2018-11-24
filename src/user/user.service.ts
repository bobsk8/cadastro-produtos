import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
    constructor() { }

    findOneByToken(token): Observable<any> {
        return of(true);
    }

    findOneByEmail(email) {
        return true;
    }
}

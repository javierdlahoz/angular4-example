import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {RequestService} from './request.service';

const currentUser = 'user';

interface Credentials {
    email: string,
    password: string
}

export interface UserInterface {
    first_name: string,
    last_name: string,
    fullname?: string,
    email: string,
    password?: string,
    avatar?: string,
    token?: string,
    tenant_id?: string
}

@Injectable()
export class AuthService extends RequestService {
    constructor(public http:Http){
        super(http);
    }

    private endpoint: string = '/users';

    login(credentials: Credentials) {
        let response = this.post(this.endpoint + '/login', credentials);
        response.then(r => {this.setCurrentUser(r.user); });
        return response;
    }

    logout() : boolean {
        this.setCurrentUser();
        return true;
    }

    save(user: UserInterface) {
        let response = this.put(this.endpoint, {user: user});
        response.then(r => {this.setCurrentUser(r.user); });
        return response;
    }
}
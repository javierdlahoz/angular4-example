import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
        return this.http.post(this.endpoint + '/login', credentials, this.getRequestOptions())
            .map(data => data.json());
    }

    logout() : boolean {
        this.setCurrentUser();
        return true;
    }

    save(user: UserInterface) {
        return this.http.put(this.endpoint, {user: user}, this.getRequestOptions()).map(data => data.json());
    }
}
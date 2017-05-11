import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {UserInterface} from './auth.service';

const currentUser = 'user';

@Injectable()
export class RequestService {
    constructor(public http:Http){}

    getHeaders() : Headers {
        let headers :Headers = new Headers();
        headers.append('Authorization', this.getAuthTokens());
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getRequestOptions() : RequestOptions {
        return new RequestOptions({headers: this.getHeaders()});
    }

    getCurrentUser() : UserInterface {
        let user = localStorage.getItem(currentUser);
        if(user){
            return JSON.parse(localStorage.getItem(currentUser));
        }
        return null;
    }

    isAuthenticated() : boolean {
        return (this.getCurrentUser() ? true : false);
    }

    setCurrentUser(user?: UserInterface) {
        if (user) {
            const storage = localStorage;
            storage.setItem(currentUser, JSON.stringify(user));
        } 
        else {
            localStorage.removeItem(currentUser);
        }
    }

    private getUserToken() : string {
        if(this.isAuthenticated()) {
            return 'Token ' + this.getCurrentUser().token;
        }
        return null;
    }

    private getBearerToken() : string {
        return 'Bearer ' + environment.tenantBearer;
    }

    private getAuthTokens() : string {
        let authHeaders: string = this.getBearerToken();
        let userToken = this.getUserToken();
        if(userToken){
            authHeaders += ', ' + userToken;
        }
        return authHeaders;
    }
}
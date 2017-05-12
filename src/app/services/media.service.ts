import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {RequestService} from './request.service';

export interface MediaInterface {
    folder: string,
    id: string,
    name: string,
    owner_id: string,
    path: string,
    size: number,
    tenant_id: string,
    type: string,
    url: string
}

@Injectable()
export class MediaService extends RequestService {
    constructor(public http:Http){
        super(http);
    }
    private formData: FormData;
    private endpoint: string = '/media';

    getAll(params: any) {
        //return this.get(this.endpoint, params);
    }

    upload(file: File) {
        let response: Promise<any>;
        this.formData = new FormData();
        this.formData.append('file', file);
        response = new Promise((resolve, reject) => {
            return this.http.post(this.endpoint, this.formData, this.getRequestOptionsForUpload())
                .subscribe(res => {
                    resolve(res.json());
                },
                error => {
                    reject(error);
                });
        });
        return response;
    }

    private getRequestOptionsForUpload() :RequestOptions {
        let options: RequestOptions,
            headers: Headers;
        headers = new Headers();
        headers.append('Authorization', this.getAuthTokens());
        options = new RequestOptions();
        options.headers = headers;
        return options;
    }
}
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {RequestService} from './request.service';

export interface MediaInterface {

}

@Injectable()
export class MediaService extends RequestService {
    constructor(public http:Http){
        super(http);
    }
    private endpoint: string = '/media';

    getAll() {
        return this.get(this.endpoint).map(data => data.json());
    }

    upload(file: File) {
        let response: Promise<Object>, 
            formData: FormData = new FormData();
        formData.append('file', file, file.name);
        response = new Promise((resolve, reject) => {
            return this.http.post(this.endpoint, formData, {headers: this.getHeaders()})
                .subscribe(res => {
                    resolve(res.json());
                },
                error => {
                    console.log(error);
                    reject(error);
                });
        });
        return response;
    }
}
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {RequestService} from './request.service';

export interface PostInterface {
    title: string,
    content: string,
    type: string,
    featured_image?: string
}

@Injectable()
export class PostService extends RequestService {
    constructor(public http:Http){
        super(http);
    }

    private endpoint: string = '/posts';

    create(post: PostInterface) {
        return this.post(this.endpoint + '/' + post.type, {post: post});
    }

    getPost(type: string, slug: string) {
        return this.get(this.endpoint + '/' + type + '/' + slug);
    }
  
}
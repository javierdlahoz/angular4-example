import { Component, OnInit } from '@angular/core';
import { PostService, PostInterface } from '../services/post.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [PostService]
})
export class AboutComponent implements OnInit {

  constructor(private postService: PostService) { 
    this.getPageContent();
  }

  isLoading: boolean = true;
  page: PostInterface;

  ngOnInit() { }

  private getPageContent() {
    this.postService.getPost('page', 'about').then((data: any) => {
      this.isLoading = false;
      this.page = data.post;
    });
  }

}

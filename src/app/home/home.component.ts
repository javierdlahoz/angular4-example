import { Component, OnInit } from '@angular/core';
import { PostService, PostInterface } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  page: PostInterface;
  constructor(private postService: PostService) {
    this.getPageContent();
  }

  ngOnInit() {}

  private getPageContent() {
    this.isLoading = true;
    this.postService.getPost('page', 'home').then((data:any) => { 
      this.isLoading = false; 
      this.page = data.post; 
    });
  }

}

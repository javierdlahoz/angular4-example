import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService, PostInterface } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  isLoading: boolean = false;
  postForm: FormGroup;
  post: PostInterface;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService) {
    this.createForm();
  }

  ngOnInit() {
  }

  save() {
    this.isLoading = true;
    this.postService.create(this.postForm.value).then((data: any) => {
      console.log(data);
      this.isLoading = false;
    });
  }

  private createForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      type: ['post'],
      featured_image: ['']
    });
  }

}

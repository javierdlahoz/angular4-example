import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AuthService, UserInterface } from '../services/auth.service';
import { MediaInterface } from '../services/media.service';
import { HeaderComponent } from '../core/shell/header/header.component';
import { UploaderComponent } from '../components/uploader/uploader.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  user: UserInterface;
  isLoading: boolean = false;
  error: string;
  media: MediaInterface;
  mediaObservable: Observable<any>;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.user = this.authService.getCurrentUser();
    this.createForm();
  }

  ngOnInit() {
  }

  save() {
    this.isLoading = true;
    this.authService.save(this.userForm.value).then(data => {this.isLoading = false;});
  }

  setAvatar(media: MediaInterface) {
    if(media.url){
      this.user.avatar = media.url;
      this.authService.save(this.user);
    }
  }

  private createForm() {
    this.userForm = this.formBuilder.group({
      first_name: [this.user.first_name],
      last_name: [this.user.last_name],
      password: [undefined]
    });
  }

}

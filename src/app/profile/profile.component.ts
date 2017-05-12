import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService, UserInterface } from '../services/auth.service';
import { HeaderComponent } from '../core/shell/header/header.component';

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

  private createForm() {
    this.userForm = this.formBuilder.group({
      first_name: [this.user.first_name],
      last_name: [this.user.last_name],
      password: [undefined]
    });
  }

}

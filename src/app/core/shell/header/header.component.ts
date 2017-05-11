import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserInterface } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  menuHidden = true;
  user: UserInterface;
  avatarStyle: string;

  constructor(private router: Router,
              private authService: AuthService) { 
    this.setCurrentUser();
  }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  setCurrentUser() {
    this.user = this.authService.getCurrentUser();
    if(this.user){
      this.avatarStyle = 'background-image: url(' + this.user.avatar + ')'; 
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showManagerBoard = false;
  showUserBoard = false;
  username?: string;
  pass?: string;
  constructor(private storageService: StorageService, private authService: AuthService,private router:Router) { }


  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');

      this.username = user.username;
    }


  }
signout(){
  this.storageService.clean();
this.router.navigate(['/login'])
}
  logout(){
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();


        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}

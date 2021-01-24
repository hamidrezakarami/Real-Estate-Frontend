import { Component } from '@angular/core';
import {  Router } from '@angular/router';
// import { UserService } from '../services/user.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent {

  // constructor( private router: Router, private userService: UserService) {
  //   this.userService.relogin = true;
  //   this.userService.resetDataSet();
  //   localStorage.setItem('currentUser', '');
  //   localStorage.clear();
  //   router.navigate(['login']);
  // }


  ngOnInit() {
  }
}

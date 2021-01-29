import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  onClickCreatAcc(){
    this.router.navigate(["main/account/creatacc"])
  }
  onClickLogOut(){
    this.router.navigate(["/login"])
  }
}

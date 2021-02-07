import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MyErrorStateMatcher } from '../creat-account/creat-account.component';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss' , '../creat-account/creat-account.component.scss'],
})
export class EditAccountComponent implements OnInit {
  backToSingIn: boolean = false;

  constructor(public router: Router) {}

  ngOnInit(): void {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  FNameFormControl = new FormControl('', [Validators.required]);
  LNameFormControl = new FormControl('', [Validators.required]);
  PFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  backBtn() {
    this.router.navigate(['main/account']);
  }
}

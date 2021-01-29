import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.scss'],
})
export class CreatAccountComponent implements OnInit {
  constructor(public router : Router) {}

  ngOnInit(): void {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  FNameFormControl = new FormControl('', [Validators.required]);
  LNameFormControl = new FormControl('', [Validators.required]);
  PFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();


  backBtn(){
    this.router.navigate(['main/account'])
  }
}

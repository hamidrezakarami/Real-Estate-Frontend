import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../services/user.service';
// import { Observable } from 'rxjs/Observable';
import { ParamsHandler } from '../core/params-handler';
// import { LoginResult } from '../models/Profile';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
// import { SubscribeManager } from '../shared/subscribe-manager';
import { Page } from '../core/Page';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends Page implements OnInit {
  errorDescription: string = '';
  // _userLogin: Observable<LoginResult>;
  _userLogin: Observable<any> | undefined;
  returnUrl: string = 'search';
  loginProcess: boolean = false;
  userInputFormControl: FormControl = new FormControl();
  passwordInputFormControl: FormControl = new FormControl();
  selectedTab: number = 0;
  _emailRequest: Observable<boolean> | undefined;
  initCompleted: boolean = false;
  serviceProcess = false;
  forgetUserInputFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  checkEmailValidation = false;

  sendButtonText = 'Reset password';
  @ViewChild('emailRef') public emailInput: ElementRef<any> | undefined;
  emailProcess: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    super('', (error, action, className: string = '') => {
      this.snackBar.open(error, action, {
        panelClass: [className],
        duration: 10000,
      });
    });
  }

  ngOnInit() {
    // this.userService.resetDataSet();
    localStorage.setItem('currentUser', '');
    localStorage.clear();

    // this._emailRequest = this.userService.resetPas;
    // this._emailRequest.subscribe((data) => {
    //   if (this.initCompleted == true) {
    //     if (data === false) {
          //this.notifyMessage('Error!');
          // document.getElementById('emailStatus').textContent = 'Error!';
          // document.getElementById('emailStatus').style.color = 'red';
        //   this.emailInput.nativeElement.value = '';
        // } else if (data === true) {
        //   this.sendButtonText = 'Resend password';
          //this.notifyMessage('Done! Check your Email');
          // document.getElementById('emailStatus').textContent =
          //   'Done! Check your email';
          // document.getElementById('emailStatus').style.color = 'green';
    //     }
    //   }
    //   this.emailProcess = false;
    // });

    // this._userLogin = this.userService.LoginResult;
    // this._userLogin.subscribe(
    //   (profile) => {
    //     if (profile == null) return;
    //     if (profile.Token == null) {
    //       this.errorDescription = profile.Error;
    //     } else if (profile.Token !== null) {
          // this.userService.UserLogin = profile;
          // this.errorDescription = null;
          // localStorage.setItem('currentUser', JSON.stringify(profile));
          // this.router.navigate(['../search/students']);
    //     }
    //     this.loginProcess = false;
    //   },
    //   () => (this.loginProcess = false),
    //   () => (this.loginProcess = false)
    // );

    this.errorDescription = '';
    this.initCompleted = true;
  }

  loginUser(user: any, password: any): void {
    let paramsHandler = new ParamsHandler();
    let body = {
      Password: password,
      Username: user,
    };
    // this.userService.userLogin(body);
    // this.userService.LoginResult.subscribe((data) => {
    //   if (data) {
        this.router.navigate(['main/home']);
    //     // location.reload()
    //   }
    // });
    this.loginProcess = true;
  }

  notifyMessage(message: string, action: string = '') {
    this.snackBar.open(message);
    this.snackBar.open(message, action, {
      panelClass: ['snack-bar-color'],
      duration: 3000,
    });
  }

  forgetPas(email: any): void {
    var regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (email == '') {
      // document.getElementById('emailStatus').textContent =
      //   'please enter your email';
      // document.getElementById('emailStatus').style.color = 'red';
    } else {
      if (!regexp.test(email)) {
        // document.getElementById('emailStatus').textContent =
        //   'Not a valid email';
        // document.getElementById('emailStatus').style.color = 'red';
      } else {
        let paramsHandlerFor = new ParamsHandler();
        paramsHandlerFor.addParam('UserName', email);
        // this.userService.resetPasswordRequest(paramsHandlerFor);
        this.emailProcess = true;
      }
    }
  }
  input_onKeyDownLog(sender: KeyboardEvent) {
    if (sender.code == 'Enter' || sender.code == 'NumpadEnter') {
      this.loginUser(
        this.userInputFormControl.value,
        this.passwordInputFormControl.value
      );
    }
  }
  input_onKeyDownFrg(sender: KeyboardEvent, email: any) {
    if (sender.code == 'Enter' || sender.code == 'NumpadEnter') {
      this.forgetPas(email);
    }
  }

  next() {
    this.selectedTab = 1;
  }

  back() {
    // document.getElementById('emailStatus').textContent = '';
    this.sendButtonText = 'Reset password';
    // this.emailInput.nativeElement.value = '';
    this.selectedTab = 0;
  }
}

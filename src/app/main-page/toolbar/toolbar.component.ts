import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { UserAccount } from '../../models/Profile';
import { Router } from '@angular/router';
import { ParamsHandler } from '../../core/params-handler';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { Page } from '../../core/Page';
// import 'rxjs/add/observable/of';
import { Location } from '@angular/common';
import { Assistant } from '../../shared/Pipe/Assistant';
import { menuItemAnimation } from './toolbar.animations';
// import { MenuService } from '../menu.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [menuItemAnimation],
})
export class ToolbarComponent extends Page implements OnInit {
  // accountList: UserAccount[];
  menuItems: any[] = [];
  sidNavActive: boolean = false;
  itemLength: number = 0;
  loading: boolean = true;

  actionButtonList: any[] = [];

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    // public userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    // public ms: MenuService
  ) {
    super(null, (error, action, className) => {
      this.snackBar.open(error, action, {
        panelClass: [className],
        duration: 10000,
      });
    });

    // this.userService.LoginResult.subscribe((profile) => {
    //   if (profile !== null && profile.Token !== null) {
    //     this.fetchAccountList();
    //     this.fetchActionButton();

    //     this.userService.AccountList.subscribe((accountList) => {
    //       if (accountList) {
    //         this.accountList = accountList;
    //         this.currentDatabase(this.userService.SelectedAccountID);
    //       }
    //     });
    //   }
    // });
  }

  fetchActionButton() {
    this.actionButtonList = [
      {
        name: 'User Management',
        link: '/settings/user-management',
        admin: true,
        icon: '../../../assets/images/profile-tools/user-management.png',
      },
      {
        name: 'Account Management',
        link: '/settings/account-management',
        admin: true,
        icon: '../../../assets/images/profile-tools/account-management.png',
      },
      {
        name: 'Database Management',
        link: '/settings/database-management',
        admin: true,
        icon: '../../../assets/images/profile-tools/database-management.png',
      },
      {
        name: 'Role Management',
        link: '/settings/role-management',
        admin: true,
        icon: '../../../assets/images/profile-tools/role-management.png',
      },
      {
        name: 'Restore Point',
        link: '/settings/restore-point',
        admin: true,
        icon: '../../../assets/images/profile-tools/RestorePoint.png',
      },
    ];
    this.actionButtonList = this.actionButtonList.filter(
      (a) => a.admin === this.IsAdminRole() || a.admin === false
    );
  }

  ngOnInit() {
    this.menuItems = Assistant.menuItem;
    this.fetchActionButton();
    // if (this.userService.UserLogin.FormalName)
    //   this.currentDB = this.userService.UserLogin.FormalName;

    // if (this.userService.UserLogin) {
    //   this.fetchAccountList();
    // }

    setTimeout(() => {
      this.loading = false;
      this.windowOnResize(null);
    }, 200);
  }

  ngAfterViewInit() {
    let i = 0;
    for (
      var n = 0;
      n < document.getElementById('menuContainer').childNodes.length;
      n++
    ) {
      let item = document.getElementById('menuContainer').childNodes[n];
      if (item.nodeName == 'A') {
        Assistant.menuItem[i++].width = item['offsetWidth'];
      }
    }
  }

  userLogout() {
    this.router.navigate(['/logout']);
  }

  currentDB: string = null;
  currentDatabase(items) {
    if (items) {
      for (let i of items) {
        // if (i.AccountID == this.userService.SelectedAccountID) {
        //   this.currentDB = i.AccountName;
        // }
      }
    }
  }

  getFullNameProfile(abbreviation: boolean = false) {
    // if (
    //   this.userService.UserLogin == null ||
    //   this.userService.UserLogin.FormalName == null
    // ) {
    //   return '';
    // }
    if (abbreviation == true) {
      let result = '';
      // var words: string[] = this.userService.UserLogin.FormalName.split(' ');
      // for (let w of words) {
      //   result += w.substring(0, 1) + ' ';
      // }
      result = result.trim();
      return result.length == 0 ? '-' : result.toUpperCase();
    } else {
      // return this.userService.UserLogin.FormalName;
    }
  }

  getProfileTooltip() {
  //   if (
  //     this.userService.UserLogin == null ||
  //     this.userService.UserLogin.FormalName == null
  //   ) {
  //     return '';
  //   } else {
  //     return this.userService.UserLogin.FormalName + ' welcome! ';
  //   }
  }

  getCurrentDB() {
    // if (
    //   this.userService.UserLogin == null ||
    //   this.userService.UserLogin.FormalName == null
    // ) {
    //   return '';
    // } else {
    //   return this.userService.UserLogin.FormalName + ' welcome! ';
    // }
  }

  getColor() {
    // return '#009688'; //Assistant.getColor(1);
  }

  showProfile() {
    // let dialogRef = this.dialog.open(ProfileDialogComponent, {
    //   width: '50%',
    //   data: {
    //     User: JSON.parse(localStorage.getItem('currentUser'))
    //   }
    // });
  }

  IsAdminRole() {
    // if (this.userService.UserLogin != null) {
    //   return this.userService.UserLogin.RoleName == 'Administrator'
    //     ? true
    //     : false;
    // }
  }

  accountChange_OnClick(account: any) {
    const paramsHandler = new ParamsHandler();
    paramsHandler.addParam('AccountID', account.AccountID);
    // this.userService.changeAccount(paramsHandler).subscribe((resp) => {
    //   const data = this.parseResponse(resp);
    //   if (data) {
    //     location.reload();
    //   } else {
    //     this.messageOnNotify('Account Not Change', 'close', 'red-snackbar');
    //   }
    // });
  }

  fetchAccountList() {
    let subscript;
    const paramsHandler = new ParamsHandler();
    // paramsHandler.addParam(
    //   'AccountRefID',
    //   this.userService.UserLogin.AccountID
    // );
    // this.userService.accountList(paramsHandler);
    // subscript = this.userService.accountList$(paramsHandler).subscribe(resp => {
    //   const data = this.parseResponse(resp);
    //   if (data) {
    //     this.accountList = data.Account;
    //     this.currentDatabase(data.Account);
    //   }
    // }, error => {
    //   if (error.status === 401) { // Unauthorized
    //     this.router.navigate(['/logout']);
    //   } else {
    //     this.messageOnNotify(JSON.stringify(error), 'close', 'red-snackbar');
    //   }
    // });
    this.addSubscription('user-management-accountList', subscript);
  }

  getSelectedAccountIcon(accountID: number): string {
    // if (accountID == this.userService.SelectedAccountID) {
      return 'check_circle';
    // } else return 'panorama_fish_eye';
  }

  updateVisibleMenu() {
    let containerSize: number = document.getElementById('toolbar').offsetWidth;
    let totalWidth = 100;

    for (let i = 0; i < Assistant.menuItem.length; i++) {
      let item = Assistant.menuItem[i];
      totalWidth += item.width + 15;
      if (totalWidth < containerSize) {
        item.location = 0;
      } else {
        Assistant.menuItem[i].location = 1;
      }
    }
  }

  windowOnResize(event) {
    this.updateVisibleMenu();
    this.menuItems = Assistant.menuItem.filter((item) => item.location == 0);
    this.sidNavActive = this.menuItems.length != Assistant.menuItem.length;
    this.itemLength = this.menuItems.length;
  }

  menu_OnClick(menu: any) {

    this.router.navigate([menu.link]);
    console.log(menu.link);
    
    // this.loading = true;
    // if (this.ms.thislink && this.ms.thislink.toString() === menu.link) {
    //   this.router
    //     .navigateByUrl('/RefreshComponent', { skipLocationChange: true })
    //     .then(() => {
    //       this.router.navigate([menu.link]);
    //       setTimeout(() => {
    //         this.loading = false;
    //       }, 200);
    //     });
    // } else {
    //   this.router.navigate([menu.link]).then(() => {
    //     setTimeout(() => {
    //       this.loading = false;
    //     }, 200);
    //   });
    // }
    // this.ms.thislink = menu.link;
  }

  isCurrentRoute(route: string): Boolean {
    return this.router.url.startsWith(route);
  }

  isProfileSelected() {
    this.actionButtonList.forEach((menu) => {
      if (this.router.url.startsWith(menu.link)) {
        return true;
      }
    });
  }
}

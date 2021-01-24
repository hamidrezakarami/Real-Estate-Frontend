import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MenuItem } from '../models/menu.model';
// import { MenuService } from 'src/app/main-page/menu.service';
import { Assistant } from 'src/app/shared/Pipe/Assistant';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { menuItemAnimation } from '../toolbar/toolbar.animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:[menuItemAnimation]
})
export class NavbarComponent implements OnInit {

  constructor(
    // public menuService: MenuService,
     private router: Router) {
    // menuService.navbarMenuListAsObservable.subscribe( data => {
    //   console.log(data);
    // });
  }

  ngOnInit() {    
  }

  getSidNavItem():any[]{
    return Assistant.menuItem.filter(item => item.location == 1);
  }

  isCurrentRoute(route: string): Boolean {    
    return this.router.url.startsWith(route);
  }


//   menu_onClick(menu: MenuItem) {
// //    this.loading = true;
//     this.router.navigate([menu.link]).then(() => {
//       setTimeout(() => {
//   //      this.loading = false;
//       }, 1);
//     });
//   }

}

import { MenuItem } from '../models/menu.model';

export class Shared {
    public static menuItem: MenuItem[] = [
        {
          id: 0,
          name: 'داشبورد',
          link: '/main/dynamic-page',
          fontIcon: 'dashboard',
          imageIcon: '',
          roleID: 0,
          selected: false
        },
        {
          id: 1,
          name: 'راننده',
          link: '/main/drivers',
          fontIcon: 'contacts',
          imageIcon: '',
          roleID: 0,
          selected: false
        },
        {
          id: 2,
          name: 'وسیله نقلیه',
          link: '/main/vehicles',
          fontIcon: 'commute',
          imageIcon: '',
          roleID: 0,
          selected: false
        },
        {
          id: 3,
          name: 'مسیر',
          link: '/main/master-routes',
          fontIcon: 'add_road',
          imageIcon: '',
          roleID: 0,
          selected: false
        },
        {
          id: 4,
          name: 'ایستگاه',
          link: '/main/corner-stop',
          fontIcon: '',
          imageIcon: '../../assets/images/toolbar/corner-stop.svg',
          roleID: 0,
          selected: false
        },
        {
          id: 5,
          name: 'گزارشات',
          link: '/main/reports',
          fontIcon: 'plagiarism',
          imageIcon: '',
          roleID: 0,
          selected: false
        }
      ];
}

export function copyMessage(val: string){
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);
}

export class Assistant {
  public static menuItem: any[] = [
    {
      id: 0,
      name: 'Home',
      link: '/main/home',
      fontIcon: 'dashboard',
      icon: '',
      admin: false,
    },
    {
      id: 1,
      name: 'Account',
      link: '/main/account',
      fontIcon: 'dashboard',
      icon: '',
      admin: false,
    },
    {
      id: 2,
      name: 'Contact',
      link: '/main/contact',
      fontIcon: 'account_box',
      icon: '',
      admin: false,
    },
    // {
    //   id: 2,
    //   name: 'Schools',
    //   link: '/search/schools',
    //   fontIcon: '',
    //   icon: './assets/menu/school.svg',
    //   admin: false,
    // },
    // {
    //   id: 3,
    //   name: 'Routes',
    //   link: '/search/routes',
    //   fontIcon: 'pin_drop',
    //   icon: '',
    //   admin: false,
    // },
    // {
    //   id: 4,
    //   name: 'Fleet',
    //   link: '/search/buses',
    //   fontIcon: 'directions_bus',
    //   icon: '',
    //   admin: false,
    // },
    // {
    //   id: 5,
    //   name: 'Monitor',
    //   link: '/search/monitors',
    //   fontIcon: 'supervisor_account',
    //   icon: '',
    //   admin: false,
    // },
    // {
    //   id: 6,
    //   name: 'Stop',
    //   link: '/search/busstop',
    //   fontIcon: '',
    //   icon: './assets/menu/bus-stop.svg',
    //   admin: false,
    // },
    // {
    //   id: 7,
    //   name: 'Corner Stop',
    //   link: '/search/cornerstop',
    //   fontIcon: '',
    //   icon: './assets/menu/corner-stop.svg',
    //   admin: false,
    // },
    // {
    //   id: 8,
    //   name: 'Yards',
    //   link: '/search/yards',
    //   fontIcon: '',
    //   icon: './assets/menu/yard.svg',
    //   admin: false,
    // },
    // {
    //   id: 9,
    //   name: 'Import Changes',
    //   link: '/settings/imports/data-import',
    //   fontIcon: 'cloud_download',
    //   icon: '',
    //   admin: false,
    // },
    // {
    //   name: "Schedule",
    //   link: "/settings/schedule",
    //   fontIcon: "schedule",
    //   icon: "",
    //   admin:true
    // },
  ];

  public static ConvertTime(time: number): string | undefined{
    var date = new Date();
    date.setSeconds(time);
    return date.toISOString();
  }
  public static getColor(index): string | undefined{
    var color = [
      '#f44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4',
      '#009688',
      '#4CAF50',
      '#8BC34A',
      '#CDDC39',
      '#FFEB3B',
      '#FFC107',
      '#FF9800',
      '#FF5722',
      '#795548',
      '#9E9E9E',
      '#607D8B',
    ];
    return color[index % color.length];
  }
  public static getIntTime(value: string) {
    var a = value.split(':'); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    return +a[0] * 60 * 60 + +a[1] * 60;
  }

  public static castBoolToNumber(val: boolean): number {
    if (val == true) {
      return 1;
    } else {
      return 0;
    }
  }

  public static isJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}

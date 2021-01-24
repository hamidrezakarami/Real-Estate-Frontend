import { isUndefined } from 'util';

export class ParamsHandler {
    private params: object = {};
    constructor(private init: object = null) {
        if (init !== null) {
           this.params = Object.assign( {} , init);
        }
    }

    public static eup(object: any): string | undefined{
      let url = '';
      url = JSON.stringify(object, (key, value) => {
        if (value !== null) {
          return value;
        }
      });
      return btoa(url);
    }
    public getJson(): object {
        return this.params;
      }

    public static dup<T>(url: string): T {
        return JSON.parse(atob(url));
    }

    public clear() {
        delete this.params;
        this.params = {};
    }

    public addParam(key: any, value: any): ParamsHandler {
        if ( !isUndefined(value) ) {
            this.params[key] = value;
        }
        return this;
    }

    public getParams(): object {
        return this.params;
    }

    public count() {
        if ( this.params ) {
            const objPropName = Object.getOwnPropertyNames(this.params);
            return objPropName.length;
        } else {
            return 0;
        }
    }

    public toJson(): object {
        return this.params;
    }

    public get urlParamaters(): string | undefined{
        const objPropName = Object.getOwnPropertyNames(this.params);
        let objStr = '';
        for (const item of objPropName) {
            if (this.params[item] !== '') {
                objStr += item + '=' + encodeURIComponent(this.params[item]) + '&';
            }
        }
        return objStr.substring(0, objStr.length - 1);
    }

}
// import { IPage, Page } from './Page';

// export class ParamsHandler {
//   private params: {
//     name: string;
//     value : string;
//   }[] = [];

//   constructor(public parent: IPage = null) {}

//   public clear() {
//     delete this.params;
//     this.params = [];
//   }

//   public addParam(key: any,value : any) {
//     if ( value !== undefined ) {
//       this.params[key] = value;
//   }
//   return this;
//   }

//   public getParams(): object {
//     return this.params;
//   }

//   public count() {
//     var objPropName = Object.getOwnPropertyNames(this.params);
//     return objPropName.length;
//   }

//   public getJson(): object {
//     return this.params;
//   }

//   public getUrlPrp(): string | undefined{
//     var objPropName = Object.getOwnPropertyNames(this.params);
//     var objStr = '';
//     for (let item of objPropName) {
//       if (this.params[item] !== '')
//         objStr += item + '=' + this.params[item] + '&';
//     }
//     return objStr.substring(0, objStr.length - 1);
//   }

//   /**
//    * encodeUrlParameters
//    * @param object
//    */
//   public static eup(object: any): string | undefined{
//     let url: string = '';
//     url = JSON.stringify(object, (key, value) => {
//       if (value !== null) return value;
//     });
//     return btoa(url);
//   }

//   /**
//    * decodeUrlParameters
//    * @param url
//    */
//   public static dup<T>(url: string): T {
//     return JSON.parse(atob(url));
//   }



//     ////////////////////
//     //////////////////////
//     //////////////////////
//     //////////////////////
//     //////////////////////
//     //////////////////////
//     //////////////////////
//     //////////////////////


//     public toJson(): object {
//         return this.params;
//     }

//     public get urlParamaters(): string | undefined{
//         const objPropName = Object.getOwnPropertyNames(this.params);
//         let objStr = '';
//         for (const item of objPropName) {
//             if (this.params[item] !== '') {1
//                 objStr += item + '=' + encodeURIComponent(this.params[item]) + '&';
//             }
//         }
//         return objStr.substring(0, objStr.length - 1);
//     }
// }

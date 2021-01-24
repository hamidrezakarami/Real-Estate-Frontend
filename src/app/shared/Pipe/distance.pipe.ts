import { Pipe, PipeTransform } from '@angular/core';
// import { UserService } from '../../services/user.service';

@Pipe({ name: 'distance' })
export class DistancePipe implements PipeTransform {
  constructor(
    // private userService: UserService
    ) {}

  transform(value: number, unitType: number = 1): string| undefined {
    // unitType = this.userService.UserLogin.UnitOfDistance || 1;
    if (value == null || Math.round(value) === 0) {
      return '0';
    } else if (unitType === 1) {
      return Math.round(value).toString() + ' m';
    } else if (unitType === 2) {
      return (value * 0.0006213712).toFixed(2).toString() + ' mi';
    }
  }

  Inputtransform(value: number, unitType: number = 1): string | undefined| undefined {
    // unitType = this.userService.UserLogin.UnitOfDistance || 1;
    if (value == null || Math.round(value) === 0) {
      return '0';
    } else if (unitType === 1) {
      return Math.round(value).toString();
    } else if (unitType === 2) {
      return (value * 0.0006213712).toFixed(2);
    }
  }

  reversetransform(value: number, unitType: number = 1): Number | undefined {
    // unitType = this.userService.UserLogin.UnitOfDistance || 1;
    if (unitType === 1) {
      return Math.round(value);
    } else if (unitType === 2) {
      return Math.round(value / 0.0006213712);
    }
  }
}

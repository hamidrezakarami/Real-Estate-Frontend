import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shiftType'})
export class ShiftPipe implements PipeTransform {
    transform(value: boolean): string | undefined{
        if (value == false) {
          return "Morning";
        }
        else if (value == true) {
          return "Afternoon";
        }

      }
}
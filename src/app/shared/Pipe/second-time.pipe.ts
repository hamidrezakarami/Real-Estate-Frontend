import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'secondTime' })
export class SecondTimePipe implements PipeTransform {
  transform(second: number, shift: any = ''): string | undefined{
    if (second) {
      var minutes = Math.floor((second % 3600) / 60);
      var hours = Math.floor(second / 3600);
      second = second % 60;
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      if (shift != 'noshift') hours = hours ? hours : 12; // the hour '0' should be '12'
      let s = second < 10 ? '0' + second.toString() : second.toString();
      let m = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
      let h = hours < 10 ? '0' + hours.toString() : hours.toString();
      if (shift === '') return h + ':' + m + ' ' + ampm;
      else if (shift === 'noshift') return h + ':' + m;
    } else {
      return '';
    }
  }
}

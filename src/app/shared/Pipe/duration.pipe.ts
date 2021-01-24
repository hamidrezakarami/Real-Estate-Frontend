import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string | undefined{
    if (value == null || Math.round(value) === 0) return '-';
    else {
      let sec_num = Math.round(value);

      let hours: any = Math.floor(sec_num / 3600);
      let minutes: any = Math.floor((sec_num - hours * 3600) / 60);
      let seconds: any = sec_num - hours * 3600 - minutes * 60;

      let h, m, s: string;

      if (hours < 10) {
        hours = '0' + hours;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return hours + ':' + minutes + ':' + seconds;
    }
  }
}

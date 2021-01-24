import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'monitorType' })
export class MonitorPipe implements PipeTransform {
  transform(value: number): string | undefined{
    if (value == 0) {
      return 'No need for monitor';
    } else if (value == 1) {
      return 'general monitor';
    } else if (value == 2) {
      return 'personal monitor';
    }
  }
}

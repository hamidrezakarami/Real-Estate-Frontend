import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pickUpType' })
export class PickUpTypePipe implements PipeTransform {
  transform(value: number): string | undefined{

    if (value == 0)
      return "School";
      
    if (value == 1)
      return "Corner Stop";
    
    if(value == 2)
      return "Door To Door";

  }
}

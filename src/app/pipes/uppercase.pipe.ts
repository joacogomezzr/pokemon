import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (typeof value === 'string') {
      return value.toUpperCase(); 
    }
    return value; 
  }

}

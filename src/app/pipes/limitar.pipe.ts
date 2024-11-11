import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitar'
})
export class LimitarPipe implements PipeTransform {

  transform(value: string, limit: number = 20): string {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
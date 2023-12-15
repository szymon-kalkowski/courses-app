import { Pipe } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe {
  transform(value: string): string {
    return value.replaceAll('/', '.');
  }
}

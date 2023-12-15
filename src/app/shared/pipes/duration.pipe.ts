import { Pipe } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe {
  transform(value: number): string {
    const hours: number = Math.floor(value / 60);
    const minutes: number = value % 60;
    const hoursString: string = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesString: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hoursString}:${minutesString}`;
  }
}

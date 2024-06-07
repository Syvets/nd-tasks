import { Pipe, PipeTransform } from '@angular/core';

type InputDate = Record<'firstName' | 'secondName' | 'thirdName', string>;

@Pipe({
  name: 'infoPipe',
  standalone: true,
})
export class InfoPipe implements PipeTransform {
  transform(inputDate: InputDate): string {
    const { firstName, secondName, thirdName } = inputDate;
    return `${firstName} ${secondName} ${thirdName}`;
  }
}

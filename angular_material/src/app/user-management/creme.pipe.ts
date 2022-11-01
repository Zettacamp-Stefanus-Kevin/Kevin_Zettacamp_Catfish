import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creme'
})
export class CremePipe implements PipeTransform {

  transform(value: string): string {
    let accent:string[] = value.split('');
    accent = accent.map(data => {
      const splited = data.normalize('NFD').split('');
      return splited[0]
    })
    return accent.join('');
  }
}

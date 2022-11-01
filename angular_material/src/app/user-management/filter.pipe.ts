import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../list';
import { CremePipe } from './creme.pipe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  cepi= new CremePipe()

  transform(items : User[]  , searchText: string): User[] {
    
  
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    searchText = this.cepi.transform(searchText);

    return items.filter(user=> {
      let calling = this.cepi.transform(user.name);
      calling = calling.toLowerCase();
      calling = calling.replace(/[.\s,]/g, '');
      return calling.includes(searchText);
      
      
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string ):any {
    let prepos=['the','of'];
    if(!value) return null;
    let words=value.split(" ");
    for (let i = 0; i < words.length; i++) {
      if(i>0 && prepos.includes(words[i]))
      {
        words[i].toLowerCase();
      }else{
        words[i]=words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
      }
    }
  return words.join(' ');
  }

}

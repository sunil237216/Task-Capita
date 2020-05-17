import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
 
})
export class  SearchPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {

      if (item[1][propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

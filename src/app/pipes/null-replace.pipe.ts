import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullReplace'
})
export class NullReplacePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value === null ? '---':value;
  }

}
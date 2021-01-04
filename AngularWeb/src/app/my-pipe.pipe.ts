import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, newEnd: string): string {
        let upgusr = value;
        upgusr = upgusr.slice(0, value.length - newEnd.length);
        upgusr = upgusr + newEnd;
        return upgusr;
  }

}

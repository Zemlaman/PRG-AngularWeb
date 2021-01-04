import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, newEnd: string): string {
        let upgusr = value;
        upgusr = upgusr.substring(0, newEnd.length);
        upgusr = upgusr + newEnd;
        return upgusr;
  }

}

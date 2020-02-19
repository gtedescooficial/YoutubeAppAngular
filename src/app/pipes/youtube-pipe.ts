import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from "@angular/platform-browser";

@Pipe({
  name: 'YoutubePipe'
})
export class YoutubePipe implements PipeTransform {

    constructor(private domsanit: DomSanitizer){

    }

  transform(value: any): any {
    let url = "https://www.youtube.com/embed/";
    return this.domsanit.bypassSecurityTrustResourceUrl(url + value);


  }

}

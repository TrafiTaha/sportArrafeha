import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipe implements PipeTransform {
  transform(ch: string): any {
    var ch1: string = "";
    for (let i = ch.length - 1; i >= 0; i--) {
      ch1 += ch[i];
    }
    return ch1;
  }
}

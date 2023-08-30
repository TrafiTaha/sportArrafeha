import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "asterix",
})
export class AsterixPipe implements PipeTransform {
  transform(ch: string): any {
    var ch1: any = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "o", "U", "Y"];
    var ch2: string = "";
    var ch3;
    for (let i = 0; i < ch.length; i++) {
      ch3 = ch[i];
      for (let j = 0; j < ch1.length; j++) {
        if (ch[i] == ch1[j]) {
          ch3 = "*";
          break;
        }
      }
      ch2 += ch3;
    }
    return ch2;
  }
}

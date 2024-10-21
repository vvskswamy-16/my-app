import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  rnd:number=0;

  roll(){
    this.rnd=Math.floor(Math.random()*6)+1
  }
}

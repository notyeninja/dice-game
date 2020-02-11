import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-logo',
  templateUrl: './dice-logo.component.html',
  styleUrls: ['./dice-logo.component.css']
})
export class DiceLogoComponent implements OnInit {

  animateTitle:boolean;
  constructor() {
    this.animateTitle = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.animateTitle = true;
    }, 1000);
  }

}

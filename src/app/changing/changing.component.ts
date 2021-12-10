import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-changing',
  templateUrl: './changing.component.html',
  styleUrls: ['./changing.component.scss']
})
export class ChangingComponent implements OnInit {

  nameControl: FormControl | any;

  public cars = [
    { number: 'AA111XX',
      brand: 'audi',
      model: 'a6',
      year: 2010 },
      { number: 'AA111XX',
      brand: 'audi',
      model: 'a6',
      year: 2010 }
  ]

  constructor() { }

  ngOnInit(): void {
    this.nameControl = new FormControl('John');
  }

}

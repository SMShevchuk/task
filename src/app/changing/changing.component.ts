import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-changing',
  templateUrl: './changing.component.html',
  styleUrls: ['./changing.component.scss']
})
export class ChangingComponent implements OnInit {

  

  nameControl: FormControl | any;
  lastNameControl: FormControl | any;
  cityControl: FormControl | any;
  carNumberControl: FormControl | any;
  brendControl: FormControl | any;
  modelControl: FormControl | any;
  yearControl: FormControl | any;

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
  public people: any;
  public idTemp:any;
  // message: any;
  // subscription: Subscription;

  constructor(private _ownerService: OwnersService) {
    // this.subscription = this._ownerService.getMessage().subscribe(message => { this.message = message; });
    // console.log(this.message);
    
  }

  //  ngOnDestroy() {
  //     // unsubscribe to ensure no memory leaks
  //     this.subscription.unsubscribe();
  // }

  ngOnInit(): void {
    this.nameControl = new FormControl();
    this.lastNameControl = new FormControl();
    this.cityControl = new FormControl();
    this.carNumberControl = new FormControl();
    this.brendControl = new FormControl();
    this.modelControl = new FormControl();
    this.yearControl = new FormControl();
    this.people = this._ownerService.getAll();
    console.log(this.people);
    console.log(7);

    this.idTemp = this._ownerService.getIdMain();



  }

}

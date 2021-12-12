import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.scss']
})
export class NewOwnerComponent implements OnInit {

  nameControl: FormControl | any;
  lastNameControl: FormControl | any;
  cityControl: FormControl | any;
  carNumberControl: FormControl | any;
  brendControl: FormControl | any;
  modelControl: FormControl | any;
  yearControl: FormControl | any;

  // public cars = [
  //   { number: 'AA111XX',
  //     brand: 'audi',
  //     model: 'a6',
  //     year: 2010 },

  //     { number: 'AA111XX',
  //     brand: 'audi',
  //     model: 'a6',
  //     year: 2010 }
  // ]
  public people: any;
  constructor(private _ownerService: OwnersService) { }

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
  }

  public idPers: any = new Date();
  
  public addNewOwner() {
    let id = this.idPers.getTime();
    console.log(id);
    this._ownerService.add(this.nameControl.value, this.lastNameControl.value, this.cityControl.value,
      this.carNumberControl.value, this.brendControl.value, this.modelControl.value,
      this.yearControl.value, id);
  }
}

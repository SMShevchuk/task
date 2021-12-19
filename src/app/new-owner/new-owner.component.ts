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
  brandControl: FormControl | any;
  modelControl: FormControl | any;
  yearControl: FormControl | any;

 
  public people: any;
  constructor(private _ownerService: OwnersService) { }

  ngOnInit(): void {
    this.nameControl = new FormControl("", [Validators.required]);
    this.lastNameControl = new FormControl("", [Validators.required]);
    this.cityControl = new FormControl("", [Validators.required]);
    this.carNumberControl = new FormControl("", [Validators.required]);
    this.brandControl = new FormControl("", [Validators.required]);
    this.modelControl = new FormControl("", [Validators.required]);
    this.yearControl = new FormControl("", [Validators.required]);
    this.people = this._ownerService.getAll();
    console.log(this.people);
    console.log(7);
    this.nameControl.statusChanges.subscribe((status: any) => {
      console.log(status)});
    
  }

 

  public idPers: any = new Date();
  
  public addNewOwner() {
    let id = this.idPers.getTime();

    console.log(id);
    let numCar:any = this.carNumberControl.value;
    console.log(this._ownerService.getNumberCar(numCar));
   
    if (this._ownerService.getNumberCar(numCar) !== 1) {
      console.log(numCar);
      this._ownerService.add(this.nameControl.value, this.lastNameControl.value, this.cityControl.value,
      this.carNumberControl.value, this.brandControl.value, this.modelControl.value,
      this.yearControl.value, id);
    
      this._ownerService.getOwnerId(1);

      let btn:any = document.querySelector('#btnBack');
      console.log(btn);
      btn.click();
    }
    else {
      let inf:any = document.getElementById('numValid');
      console.log(inf);
      inf.style.display = 'block';
    }
   
  }
}
function myValidator (formControl: FormControl ) {
  if (formControl.value.length !==8) {
    return {myValidator: {message: "invalid"}};
  }
  return null;
} 

function getNumberCar(numCar: any) {
  throw new Error('Function not implemented.');
}

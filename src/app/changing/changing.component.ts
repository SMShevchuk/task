import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  brandControl: FormControl | any;
  modelControl: FormControl | any;
  yearControl: FormControl | any;

  public idPers: any = new Date();
  public cars:any;
  public people: any;
  public idTemp:any =1;
  public ownerForId:any;
  
  constructor(private _ownerService: OwnersService) {    
  }

  ngOnInit(): void {
    this.people = this._ownerService.getAll();
    this.idTemp = this._ownerService.getIdMain() || 1;
    this.ownerForId = this._ownerService.getOwnerId(this.idTemp);
    this.cars = this.ownerForId.cars;
    this.nameControl = new FormControl(this.ownerForId.name, [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.lastNameControl = new FormControl(this.ownerForId.lastName, [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.cityControl = new FormControl(this.ownerForId.city, [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.carNumberControl = new FormControl('',  [Validators.required, ]); //Validators.pattern('^[ABCEHIKMOPTX]{2}\d{4}(?<!0{4})[ABCEHIKMOPTX]{2}$'));
    this.brandControl = new FormControl('',  [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.modelControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z1-9]*')]);
    this.yearControl = new FormControl('', [Validators.required , Validators.min(1990), Validators.max(this.idPers.getFullYear())]);
    

  }
  addAuto() {
    let but:any = document.querySelector('#addButton');
    but.setAttribute("disabled", true);
    let el:any = document.querySelector('#addCar');
    el.style.display = "block";
    let butSave:any = document.querySelector('#saveName');
    butSave.style.display = "none";
  }

  public newCar:any;
  saveAddCar() {
    let but:any = document.querySelector('#addButton');
    but.removeAttribute("disabled");
    let form:any = document.querySelector('#addCar');
    form.style.display = "none";
    let numCar:any = this.carNumberControl.value;
   
    if (this._ownerService.getNumberCar(numCar) !== 1) {
      if (this.carNumberControl.valid&&this.brandControl.valid&&this.modelControl.valid&&this.yearControl.valid) {
       this.ownerForId.cars.push({
          number: this.carNumberControl.value,
          brand: this.brandControl.value,
          model: this.modelControl.value,
          year: this.yearControl.value
        });
      }
      else {
        alert('Enter valid data!!!');
      }
      
      let butSave:any = document.querySelector('#saveName');
    butSave.style.display = "block";
    }
    else {
      alert('cars with this number already exist');
    }
    
    
  }
  public saveName() {
    if (this.nameControl.valid&&this.lastNameControl.valid&&this.cityControl.valid) {
      this._ownerService.editPeople(this.nameControl.value,this.lastNameControl.value,this.cityControl.value,this.idTemp);
    }
    else {
      alert('No corect DATA!!!');
    }
  }

  public removeLine(line:any, cars:any) {
    if (cars.length>1) {
      let answer = confirm("You really want to delete?");
      if (answer==true) {
        this._ownerService.removeCar(line, cars);
      }
    }
    else {
      alert("It is the last car!!! ");
    }
    
  }

  

}


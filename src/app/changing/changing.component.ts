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
  brendControl: FormControl | any;
  modelControl: FormControl | any;
  yearControl: FormControl | any;

  public cars:any;
  public people: any;
  public idTemp:any =1;
  public ownerForId:any;
  
  constructor(private _ownerService: OwnersService) {    
  }

  ngOnInit(): void {
    this.people = this._ownerService.getAll();
    console.log(this.people);
    console.log(7);

    this.idTemp = this._ownerService.getIdMain() || 1;
    this.ownerForId = this._ownerService.getOwnerId(this.idTemp);
    this.cars = this.ownerForId.cars;
    console.log(this.ownerForId);
    this.nameControl = new FormControl(this.ownerForId.name);
    this.lastNameControl = new FormControl(this.ownerForId.lastName);
    this.cityControl = new FormControl(this.ownerForId.city);
    this.carNumberControl = new FormControl();
    this.brendControl = new FormControl();
    this.modelControl = new FormControl();
    this.yearControl = new FormControl();
    

  }
  addAuto() {
    document.querySelector('#addButton')?.setAttribute("disabled", "disabled");
    console.log(document.querySelector('#addCar'));
    let el = document.querySelector('#addCar');
    el.style.display = "block";
  }

  public newCar:any;
  saveAddCar() {
    this.ownerForId.cars.push({
      number: this.carNumberControl.value,
      brand: this.brendControl.value,
      model: this.modelControl.value,
      year: this.yearControl.value
    });
  }

  public removeLine(line:any, cars:any) {
   
    let answer = confirm("You really want to delete?");
    if (answer==true) {
      console.log(line);
      console.log(cars);
      this._ownerService.removeCar(line, cars);
    }
  }

  

}
function disabled(disabled: any) {
  throw new Error('Function not implemented.');
}


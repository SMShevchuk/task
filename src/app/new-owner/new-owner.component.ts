import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.scss']
})
export class NewOwnerComponent implements OnInit {

  public correct = true;
 
  nameControl: FormControl | any;
  lastNameControl: FormControl | any;
  cityControl: FormControl | any;
  carNumberControl: FormControl | any;
  brandControl: FormControl | any;
  modelControl: FormControl | any;
  yearControl: FormControl | any;

  public idPers: any = new Date();

  public vName:any;
  public vLastName:any;
  public vCity:any;
  public vCarNum:any;
  public vBrand:any;
  public vModel:any;
  public vYear:any;

  public people: any;
  constructor(private _ownerService: OwnersService) { }

  ngOnInit(): void {
    this.nameControl = new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.lastNameControl = new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.cityControl = new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.carNumberControl = new FormControl("", [Validators.required, ]); //Validators.pattern('^[ABCEHIKMOPTX]{2}\d{4}(?<!0{4})[ABCEHIKMOPTX]{2}$')
    this.brandControl = new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.modelControl = new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z1-9]*')]);
    this.yearControl = new FormControl("", [Validators.required , Validators.min(1990), Validators.max(this.idPers.getFullYear())]);
    this.people = this._ownerService.getAll();
  
    this.nameControl.statusChanges.subscribe((status: any) => {
      if (this.nameControl.valid) {
        this.vName = 1;
        if (this.vName + this.vLastName + this.vCity + this.vCarNum + this.vBrand + 
          this.vModel + this.vYear == 7) {
          console.log(77777777);
          this.save();
        }
      }
      else {this.vName = 0;}
      console.log(this.vName)
    });

    this.lastNameControl.statusChanges.subscribe((status: any) => {
      if (this.lastNameControl.valid) {
        this.vLastName = 1;
        if (this.vName + this.vLastName + this.vCity + this.vCarNum + this.vBrand + 
          this.vModel + this.vYear == 7) {
          console.log(77777777);
          this.save();
        }      
      }
      else {this.vLastName = 0;}
      console.log(this.vLastName);
    });

    this.cityControl.statusChanges.subscribe((status: any) => {
      if (this.cityControl.valid) {
        this.vCity = 1;
        if (this.vName + this.vLastName + this.vCity + this.vCarNum + this.vBrand + 
          this.vModel + this.vYear == 7) {
          console.log(77777777);
          this.save();
        }
      }
      else {this.vCity = 0;}
      console.log(this.vCity)
    });

    this.carNumberControl.statusChanges.subscribe((status: any) => {
      if (this.carNumberControl.valid) {
        this.vCarNum = 1;
        if (this.vName + this.vLastName + this.vCity + this.vCarNum + this.vBrand + 
          this.vModel + this.vYear == 7) {
          console.log(77777777);
          this.save();
        }
      }
      else {this.vCarNum = 0;}
      console.log(this.vCarNum)
    });

    this.brandControl.statusChanges.subscribe((status: any) => {
      if (this.brandControl.valid) {
        this.vBrand = 1;
        if (this.vName + this.vLastName + this.vCity + this.vCarNum + this.vBrand + 
          this.vModel + this.vYear == 7) {
          console.log(77777777);
          this.save();
        }
      }
      else {this.vBrand = 0;}
      console.log(this.vBrand)
    });

    this.modelControl.statusChanges.subscribe((status: any) => {
      if (this.modelControl.valid) {
        this.vModel = 1;
        if (this.vName + this.vLastName + this.vCity + this.vCarNum + this.vBrand + 
          this.vModel + this.vYear == 7) {
          console.log(77777777);
          this.save();
        }
      }
      else {this.vModel = 0;}
      console.log(this.vModel)
    });

    this.yearControl.statusChanges.subscribe((status: any) => {
      if (this.yearControl.valid) {
        this.vYear = 1;
        if (this.vName + this.vLastName + this.vCity + this.vCarNum + this.vBrand + 
          this.vModel + this.vYear == 7) {
          console.log(77777777);
          this.save();
        }
      }
      else {this.vYear = 0;}
      console.log(this.vYear)
    });
   
  }

  public save() {
    this.correct = false;
  }
  
  public addNewOwner() {
    let id = this.idPers.getTime();
    let num = this.vName + this.vLastName + this.vCity + this.vCarNum + this.vBrand + 
    this.vModel + this.vYear;

    let numCar:any = this.carNumberControl.value;
    
    if (this._ownerService.getNumberCar(numCar) !== 1) {
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
      inf.style.display = 'block';
    }  
  }
}

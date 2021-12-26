import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.scss']
})
export class LookComponent implements OnInit {

  public cars:any;
  public people: any;
  public idTemp:any =1;
  public ownerForId:any;
  public name: any;
  public lastName: any;
  public city: any;
  
  constructor(private _ownerService: OwnersService) {    
  }

  ngOnInit(): void {
    this.people = this._ownerService.getAll();
    this.idTemp = this._ownerService.getIdMain() || 1;
    this.ownerForId = this._ownerService.getOwnerId(this.idTemp);
    this.cars = this.ownerForId.cars;
    this.name = this.ownerForId.name;
    this.lastName = this.ownerForId.lastName;
    this.city = this.ownerForId.city;
  }
}
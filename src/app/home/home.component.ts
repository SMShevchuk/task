import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public people: any;
  public owner: any;
  public personLooc: any;
  public personEdit: any;

  constructor(private _ownerService: OwnersService) {

  }


  ngOnInit(): void {
    this.people = this._ownerService.getAll();
  }

  public choosePerson(el:any, person:any) {
    this.owner = el;
    console.log(this.owner);
    document.querySelector("#look")?.classList.remove("disabled");
    document.querySelector("#edit")?.classList.remove("disabled");
   
    el.style.fontWeight = "700";

    console.log(person);
    
  }
  public lookPerson() {
    document.querySelector("#look")?.classList.add("disabled");
  }
  public editPerson() {
    document.querySelector("#edit")?.classList.add("disabled");
  }

  public removeLine(per:any) {
    console.log(per);
    let answer = confirm("You really want to delete?");
    if (answer==true) {
      this._ownerService.remove(per);
      this.people = this._ownerService.getAll();
      document.querySelector("#look")?.classList.add("disabled");
      document.querySelector("#edit")?.classList.add("disabled");
    }
  }
}

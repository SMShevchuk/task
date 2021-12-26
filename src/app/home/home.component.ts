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
  public personLoocId: any;
  public personEdit: any;

  constructor(private _ownerService: OwnersService) {
  }

  ngOnInit(): void {
    this.people = this._ownerService.getAll();
  }

  public choosePerson(el:any, person:any) {
    let x = el.parentNode.childNodes;
    for (let i=0;i<x.length-1;i++) {
      x[i].style.fontWeight = "400";
    }
    
    this.owner = el;
    document.querySelector("#look")?.classList.remove("disabled");
    document.querySelector("#edit")?.classList.remove("disabled");
   
    el.style.fontWeight = "700";
    this._ownerService.getId(person.id);
    this._ownerService.getIdMain();
    this.personLoocId = person.id;
  }

  public lookPerson() {
    document.querySelector("#look")?.classList.add("disabled");
    document.querySelector("#edit")?.classList.add("disabled"); 
  }

  public removeLine(per:any) {
    let answer = confirm("You really want to delete?");
    if (answer==true) {
      this._ownerService.remove(per);
      this.people = this._ownerService.getAll();
      document.querySelector("#look")?.classList.add("disabled");
      document.querySelector("#edit")?.classList.add("disabled");
    }
  }
}

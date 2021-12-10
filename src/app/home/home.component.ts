import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isFalse:boolean = true;
  public people:any = [
    {
      name: 'djon',
      middleName: 'djonovich',
      lastName: 'zzx'
    },
    {
      name: 'djon2',
      middleName: 'djonovich2',
      lastName: 'zzjkx'
    },
  ];

  public choosePerson(el:any) {
    console.log(el);
    el.style.backgroundColor = "#fff";
    el.style.color = "#000";
  }


  constructor() { }

  ngOnInit(): void {
  }

}

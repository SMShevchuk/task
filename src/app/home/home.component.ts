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
      lastName: 'zzx',
      cars: ['audi', 'bmw', 'lada']
    },
    {
      name: 'djon2',
      middleName: 'djonovich2',
      lastName: 'zzjkx',
      cars: ['audi', 'bmw']
    },
  ];

  public humen:any;

  public choosePerson(el:any) {
    this.humen = el;
    // let line = el.parentNode.childNodes;
    // for (let i=0; i<line.length; i++) {
    //   line[i].style.fontWeight = "400";
    //   console.log((line[i]) );
    // }
    
    console.log(el);
    el.style.fontWeight = "700";
    
  }

  public removeLine() {
    let answer = confirm("Are you soure delete" );
    if (answer) {
      console.log(answer);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  private subject = new Subject<any>();

  sendMessage(message: number) {
    console.log(777);
    this.subject.next({ text: message });
}

clearMessage() {
    this.subject.next('');
}

getMessage(): Observable<any> {
    return this.subject.asObservable();
}
getId(idEl:number) {
  console.log(idEl);
  return idEl;
}

  private people:any = [
    {
      id: 1,
      name: 'djon',
      city: 'derb',
      lastName: 'zzx',
      cars: ['audi', 'bmw', 'lada']
    },
    {
      id: 2,
      name: 'djon2',
      city: 'defr',
      lastName: 'zzjkx',
      cars: [
        {
          number: 'AA1111XX',
          brand: 'audi',
          model: 'a6',
          year: 2010 
        },
        {
          number: 'AA1112XX',
          brand: 'audi',
          model: 'a6',
          year: 2018 
        },  
        {
          number: 'AA1112XX',
          brand: 'audi',
          model: 'a6',
          year: 2018 
        },  
      ]
    },
  ];

  public getAll() {
    return this.people;
  }

  public getOwnerId(id:number) {
    console.log(this.people.length);
    for (let i=0; i<this.people.length; i++) {
      if (this.people[i].id == id) {
        console.log(this.people[i]);
        return this.people[i];
      }
    }
  }

  public remove(id: number) {
    return this.people = this.people.filter((owner: { id: number; }) => owner.id !== id);
  }

  public add(name:any, lastName:any, city:any, carNumber:any, brend:any, model:any, year:any, id:any) {
    return (this.people.push({ 
      name: name,
      lastName: lastName,
      city: city,
      id: id,
      cars: [
        {
          number: carNumber,
          brend: brend,
          model: model,
          year: year
        }
      ]
     }))
  }

  constructor() { }
}

 
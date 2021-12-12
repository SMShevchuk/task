import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

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

 
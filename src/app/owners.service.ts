import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  
  private  ownerIdMain:any;

getId(idEl:number) {
  console.log(idEl);
  this.ownerIdMain = idEl;
  return idEl;
}

getIdMain() {
  console.log(this.ownerIdMain);
  return this.ownerIdMain;
}
  private people:any = [
   
    {
      id: 1,
      name: 'djon',
      city: 'derb',
      lastName: 'zzx',
      cars: [
        {
          id: 1,
          number: 'AA0001XX',
          brand: 'audi',
          model: 'a6',
          year: 2010 
        },
        {
          id: 2,
          number: 'AA0002XX',
          brand: 'audi',
          model: 'a6',
          year: 2018 
        },  
        {
          id: 3,
          number: 'AA0003XX',
          brand: 'audi',
          model: 'a6',
          year: 2018 
        },  
      ]
    },
    {
      id: 2,
      name: 'djon2',
      city: 'defr',
      lastName: 'zzjkx',
      cars: [
        {
          id: 1,
          number: 'AA1111XX',
          brand: 'audi',
          model: 'a6',
          year: 2010 
        },
        {
          id: 2,
          number: 'AA1112XX',
          brand: 'audi',
          model: 'a6',
          year: 2018 
        },  
        {
          id: 3,
          number: 'AA1113XX',
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

  public removeCar(auto: any) {
    let id = auto.id;
    console.log(id);
    return this.people.cars = this.people.cars.filter((car: { id: number; }) => car.id !== id);
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

 
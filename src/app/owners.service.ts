import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  public people:any = [
    {
      id: 1,
      name: 'Djon',
      city: 'London',
      lastName: 'Wilson',
      cars: [
        {
          number: 'AA0001XX',
          brand: 'audi',
          model: 'a6',
          year: 2021 
        },
        {
          number: 'AA0002XX',
          brand: 'audi',
          model: 'a8',
          year: 2018 
        },  
        {
          number: 'AA0003XX',
          brand: 'audi',
          model: 'a4',
          year: 2019 
        },  
      ]
    },
    {
      id: 2,
      name: 'Oliver',
      city: 'London',
      lastName: 'Taylor',
      cars: [
        {
          number: 'AA1111XX',
          brand: 'Volkswagen',
          model: 'B6',
          year: 2010 
        },
        {
          number: 'AA1112XX',
          brand: 'Volkswagen',
          model: 'Golf',
          year: 2018 
        },  
        {
          number: 'AA1113XX',
          brand: 'Volkswagen',
          model: 'TT',
          year: 2020 
        },  
      ]
    },
  ];

  
  private  ownerIdMain:any;

getId(idEl:number) {
  this.ownerIdMain = idEl;
  return idEl;
}

getIdMain() {
  return this.ownerIdMain;
}
private numAuto: any = 0;
getNumberCar(num: any) {
  for (let i=0; i<this.people.length; i++) {
    for (let j=0; j<this.people[i].cars.length; j++){
      if (this.people[i].cars[j].number == num) {
        this.numAuto = 1;
        return this.numAuto;
      }    
    }    
  }
}
 
  public getAll() {
    return this.people;
  }

  public getOwnerId(id:number) {
    for (let i=0; i<this.people.length; i++) {
      if (this.people[i].id == id) {
        return this.people[i];
      }
    }
  }

  public remove(id: number) {
    return this.people = this.people.filter((owner: { id: number; }) => owner.id !== id);
  }

  public removeCar(auto: any, cars:any) {
    let index = cars.indexOf(auto);
    if (index > -1) {
      cars.splice(index, 1);
    }
  }

  
  public editPeople(name:any, lastName:any, city:any, id:any) {
    
    for (let i=0;i<this.people.length;i++) {
      if (this.people[i].id == id) {
        this.people[i].name = name,
        this.people[i].lastName = lastName,
        this.people[i].city = city       
      }
    }
  }

  public add(name:any, lastName:any, city:any, carNumber:any, brand:any, model:any, year:any, id:any) {
    return (this.people.push({ 
      name: name,
      lastName: lastName,
      city: city,
      id: id,
      cars: [
        {
          number: carNumber,
          brand: brand,
          model: model,
          year: year
        }
      ]
     }))
  }

  constructor() { }
}

 
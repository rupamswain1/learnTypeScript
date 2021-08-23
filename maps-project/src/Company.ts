import faker, { address } from 'faker';

export class Company{
    companyName:string;
    catchPhrose:string;
    location:{
        lat:number,
        lng:number
    }

    constructor(){
        this.companyName=faker.company.companyName();
        this.catchPhrose=faker.company.catchPhrase();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),
        }
    }
}
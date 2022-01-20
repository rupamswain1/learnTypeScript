import faker from 'faker';

export class Company{
    companyName:string;
    companyCatchPhrase:string;
    companylocation:{
        lat:number,
        lng:number
    }

    constructor(){
        this.companyName=faker.company.companyName();
        this.companyCatchPhrase=faker.company.catchPhrase();
        this.companylocation={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
}
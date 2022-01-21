import faker from 'faker';

export class Company{
    companyName:string;
    companyCatchPhrase:string;
    location:{
        lat:number,
        lng:number
    }

    constructor(){
        this.companyName=faker.company.companyName();
        this.companyCatchPhrase=faker.company.catchPhrase();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }

    marker():string{
        return(
            `<div>
                <h1>Company name: ${this.companyName}</h1>
                <h2>Catch phrase: ${this.companyCatchPhrase}</h2>
             </div>
            `
        )
    }
}
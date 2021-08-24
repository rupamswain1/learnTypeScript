import faker, { address } from 'faker';
import { Mappable } from './CustomMap';
export class Company implements Mappable{
    companyName:string;
    catchPhrose:string;
    location:{
        lat:number,
        lng:number
    }
    color:string;
    constructor(){
        this.companyName=faker.company.companyName();
        this.catchPhrose=faker.company.catchPhrase();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),
        }
        this.color="green";
    };

    markerContent():string{
        return `
            <div>
                <h1>Company Name: ${this.companyName}</h1>
                <h3>Catch Phrase: ${this.catchPhrose}</h3>
            </div>
        `
    }
}
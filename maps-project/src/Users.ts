import faker from 'faker';
import { Mappable } from './CustomMap';
export class Users implements Mappable{
    name:string;
    location:{
        lat:number,
        lng:number
    };

    constructor(){
        this.name=faker.name.firstName()+" "+faker.name.lastName();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),

        }
    }
    marker():string{
        return(
            `
                <div>
                    <h1>Name:${this.name}</h1>
                </div>
            `
        )
    }
}

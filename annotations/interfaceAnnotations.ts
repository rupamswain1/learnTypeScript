interface Vehicle{
    brand:string,
    model:string,
    yearOfManufacture:number,
    isAdv:boolean,
    summary():string //return type
}

interface Reportable{
    summary():string
}

const advBike:Vehicle={
    brand:'KTM',
    model:'adv 390',
    yearOfManufacture:2020,
    isAdv:true,
    summary():string{return `${this.brand} launched a new bike 
    with model name ${this.model} 
    manufactutred in ${this.yearOfManufacture} 
    is it an Adv? ${this.isAdv}!!!1`;}
}

const prinBike=(bike:Vehicle)=>{
    console.log(`${bike.brand} launched a new bike 
    with model name ${bike.model} 
    manufactutred in ${bike.yearOfManufacture} 
    is it an Adv? ${bike.isAdv}!!!1`)
    console.log(bike.summary())
}

const reportBike=(item:Reportable)=>{
    console.log('Reporter Reporting>>>',item.summary())
}

prinBike(advBike);
reportBike(advBike);
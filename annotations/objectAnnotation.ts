const profile={
    names:"Lenovo",
    model:"G500s",
    year:2013,
    specs:{
        ram:4,
        cpu:'i3',
        cpuGen:"3rd",
    },
    setWarrenty(year:number):void{
        this.year=year
    }
};

//Annotations
const {model,names}:{model: string;names:string}=profile;
console.log(names,model);
const {specs:{ram,cpu}}:{specs:{ram:number;cpu:string}}=profile;
console.log(ram,cpu)
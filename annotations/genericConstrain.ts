class Home{
    print():void{
        console.log('I am a House');
        
    }
}

class Vehicle{
    print():void{
        console.log('I am a Vehicle');
        
    }
}

interface printable{
    print():void;
}
function PrintAnything<T extends printable>(arr:T[]):void{
    for (let i of arr){
        i.print();
    }
}

const array=[new Home(),new Vehicle()];
PrintAnything(array)
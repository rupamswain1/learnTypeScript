class Vehicle{

    constructor(public color:string){}//color will be initialized within contructor

    private drive():void{
        console.log("vrooooooom")
    };

    honk():void{
        console.log('beep beep');
    }

    public driveSound():void{
        this.drive();
    }
}

class Bike extends Vehicle{
    constructor(public wheels:number,color:string){
        super(color)
    }
    honk():void{
        console.log("peeeepeeeepeeeeee")
    }
}

let vehicle=new Vehicle('Grey');
vehicle.driveSound();
vehicle.honk();
console.log(vehicle.color)
let bike=new Bike(2,'matt black');
//bike.drive(); //this cannot be accessed directly as drive method is private
bike.driveSound();
bike.honk();
console.log(bike.color)
console.log("Number of wheels are: ",bike.wheels)
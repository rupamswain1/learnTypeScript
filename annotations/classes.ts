class Vehicle{
    drive():void{
        console.log("vrooooooom")
    };

    honk():void{
        console.log('beep beep');
    }
}

class Bike extends Vehicle{
    honk():void{
        console.log("peeeepeeeepeeeeee")
    }
}

let bike=new Bike();
bike.drive();
bike.honk();
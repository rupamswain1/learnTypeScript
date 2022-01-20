import { Users } from "./Users";

interface Mappable{
    location:{
        lat:number,
        lng:number
    }
}

export class CustomMap{
    private googlemap:google.maps.Map;
 
    constructor(DivId:string){
        this.googlemap=new google.maps.Map(document.getElementById(DivId),{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        })
    }
   
    addMarker(mappable:Mappable){
        new google.maps.Marker({
            map:this.googlemap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        })
    }
   
}
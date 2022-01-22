import { Users } from "./Users";

export interface Mappable{
    location:{
        lat:number,
        lng:number
    };
    marker():string
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
        const marker=new google.maps.Marker({
            map:this.googlemap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        })

        marker.addListener('click',()=>{
            const infoWindow=new google.maps.InfoWindow({
                content:mappable.marker()
            });
            infoWindow.open(this.googlemap,marker)
        })
    }
   
}
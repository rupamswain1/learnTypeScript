import { Eventing } from "./Eventing";
import axios, {Axios, AxiosResponse} from 'axios';


export class Collection<T,K>{
    model: T[]=[];
    events: Eventing=new Eventing();
    constructor(
        public rootUrl:string,
        public deserialize:(value:K)=>T
        ){}
    get on(){
        return this.events.on;
    }

    get trigger(){
        return this.events.trigger;
    }

    fetch=():void=>{
      
        axios.get(this.rootUrl)
        .then((response:AxiosResponse)=>{
            response.data.forEach((value:K)=>{
                this.model.push(this.deserialize(value))
            })
        })
        .then((response)=>{
            this.trigger('change');
        })
       
        
    }
}
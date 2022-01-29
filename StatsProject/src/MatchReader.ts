import {MatchResults} from './MatchResultTypes';
import {dateStringToDate} from './Utils';
import {MatchTypeTuple} from './MatchType';
interface DataReader{
    read():void;
    data:string[][];
}


export class MatchReader{
    matches:MatchTypeTuple[]=[]
    constructor(public reader:DataReader){}
    load():void{
        this.reader.read();
        this.matches=this.reader.data.map((row:string[]):MatchTypeTuple=>{
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResults,
                row[6]
            ];
        })
    }
   
}
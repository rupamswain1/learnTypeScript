import fs from 'fs';
import { MatchResults } from './MatchResultTypes';
import {dateStringToDate} from './Utils';

type MatchTypeTuple=[Date,string,string,number,number,MatchResults,string];
export class CSVFileReader{
    data:MatchTypeTuple[]=[];
    constructor(public filename:string){}

    read():void{
        this.data=fs.readFileSync(this.filename,{
            encoding:'utf-8'
        })
        .split('\n')
        .map((row:string):string[]=>{
            return row.split(',');
        })
        .map((row:string[]):MatchTypeTuple=>{
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResults,
                row[6]

            ];
        });
        
    }
}
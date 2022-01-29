import { MatchResults } from "../MatchResultTypes";
import { MatchTypeTuple } from "../MatchType";
import { Analyzer } from "../Summary";

export class WinsAnalyzer implements Analyzer{
    constructor(public team:string){

    }

    run(matches:MatchTypeTuple[]):string{
        let wins=0;

        for(let data of matches){
            
            if((data[1]==='Man United' && data[5]===MatchResults.HomeWin)||(data[2]==='Man United' && data[5]===MatchResults.AwayWin)){
                wins++;
            }
        }
        return `${this.team} has won ${wins} matches`
    }
}
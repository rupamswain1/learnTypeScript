import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResultTypes';
const reader=new MatchReader('football.csv');
reader.read();

let count=0;

for(let data of reader.data){
    
    if((data[1]==='Man United' && data[5]===MatchResults.HomeWin)||(data[2]==='Man United' && data[5]===MatchResults.AwayWin)){
        count++;
    }
   
}
console.log(`Man United has won ${count} matches`);

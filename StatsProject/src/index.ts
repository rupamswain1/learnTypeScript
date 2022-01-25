import fs from 'fs'

const matches=fs.readFileSync('football.csv',{
    encoding:'utf-8'
}).split('\n')
.map(data=>data.split(','))
let count=0;
for(let data of matches){
    
    if((data[1]==='Man United' && data[5]==='H')||(data[2]==='Man United' && data[5]==='A')){
        count++;
    }
   
}
console.log(`Man United has won ${count} matches`);

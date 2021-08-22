const numArr:number[]=[1,2,3,4,5];
const twoDArray:number[][]=[[1,2],[3,4]];

//Or

const numArr2:number[]=[1,2,3,4,5];
const twoDArray2:number[][]=[[1,2],[3,4]];
console.log(numArr);
console.log(numArr2);
console.log(twoDArray);
console.log(twoDArray2);

//Flexible types

const flexibaleArr:(string|Date)[]=[];
flexibaleArr.push(new Date());
flexibaleArr.push('20 Jan 2021');
console.log("Flexible Array: ",flexibaleArr);
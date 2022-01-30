function printAnything<T>(arr:T[]):void{
    for (let i of arr){
        console.log(i);
        
    }
}

printAnything([1,2,3,4]);
printAnything(['a','b','c','d']);
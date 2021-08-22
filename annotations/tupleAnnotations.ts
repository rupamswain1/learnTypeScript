//Object equivalent of tupele
const drinKObj={
    color:'brown',
    carbonated:true,
    sugar:40
}

//tuple declaration in type script
const pespi:[string,boolean,number]=['dark brown',true,50];

//tuple alias
type drink=[string,boolean,number];

//tuple declaration using the alias
const miranda:drink=['Orange',true,50];
const maza:drink=['Orange',false,40];
const sugarFreeTea=['brown',false,0];

console.log(pespi);
console.log(miranda);
console.log(maza);
console.log(sugarFreeTea);
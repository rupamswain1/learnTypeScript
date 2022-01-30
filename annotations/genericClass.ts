class AnyClass<T>{
    constructor(public data:T){}

    getDataType():string{
        return typeof this.data
    }
}

const str=new AnyClass('abc');
console.log(str.getDataType());

const num=new AnyClass(1234);
console.log(num.getDataType());

const arr=new AnyClass([1,2,3,4]);
console.log(arr.getDataType());
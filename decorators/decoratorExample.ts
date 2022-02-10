class TestDecorator{
    color:string='red'
   
    get formattedColor():string{
        return `the formatted color is ${this.color}`
    }
   
    @methodDecorator
    method1():void{
        console.log('Hello from 1');
        
    }

    @logError
    errorTest():void{
        throw new Error();
        console.log('Error is thrown');
        
    }
}

function methodDecorator(target:any,key:string):void{
    console.log('--------------------------FROM method Decorator---------------------r');
    console.log('target',target);
    console.log('key',key);
}

function logError(target:any,key:string,desc:PropertyDescriptor){
    const method=desc.value;
        
    desc.value=function(){
        try{
            method()
        }
        catch(e){
            console.log('Error catched in decorator');
            
        }
    }
}

new TestDecorator().errorTest()
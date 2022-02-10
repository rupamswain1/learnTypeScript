@classDecorator
class TestDecoratorFactory{

    @propoertyDecorator
    color:string='red'
   
    get formattedColor():string{
        return `the formatted color is ${this.color}`
    }
   
  
    method1():void{
        console.log('Hello from 1');
        
    }

    @logError('something bad happened')
    errorTest():void{
        throw new Error();
        console.log('Error is thrown');
        
    }

    //Parameterized Decorator
    parameterTest(
        @parameterDecorator foo1:string,
        @parameterDecorator foo2:string
    ):void{
        console.log('this is the parameter functon');
        
    }
}

function classDecorator(constructor:typeof TestDecoratorFactory){
    console.log('this is a class decorator------>');
    
    console.log(constructor);

    console.log('End of class Decorator---------<');
    
    
}

function parameterDecorator(target:any,key:string,index:number){
    console.log('This is a parameter test decorator');
    
    console.log(key, index);
    console.log('End of Parameter test Decorator--------------------<');
    
}

function propoertyDecorator(target:any,key:string){
    console.log('Property Decorator------------------------------>');
    
    console.log(target);
    console.log(key);
    console.log('End of decorator-------------------------------<');
    
    
}

function logError(errorMessage:string){
    return function(target:any,key:string,desc:PropertyDescriptor){
        const method=desc.value;
            
        desc.value=function(){
            try{
                method();
            }
            catch(e){
                console.log(errorMessage);
                
            }
        }
    }
}

new TestDecoratorFactory().errorTest()
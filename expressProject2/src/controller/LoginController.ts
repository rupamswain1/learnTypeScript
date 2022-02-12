import {NextFunction, Request,Response} from 'express';
import {get,controller,use, post,bodyValidator} from './decorators';

function logger(req:Request,res:Response,next:NextFunction){
    console.log('request was created');
    next();
}


interface RequestWithBody extends Request{
    body:{[key:string]:string|undefined}
}
@controller('/auth')
class LoginController{
    @get('/login')
    @use(logger)
    getLogin(req:Request,res:Response){
        res.send(`
        <form method="POST">
                <div>
                    <label>Email<label>
                    <input type="email" name="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
        </form>
        `)
    }
    @post('/login')
    @bodyValidator('email','password')
    postLogin(req:RequestWithBody,res:Response){
        const {email,password}=req.body;
        if(email==='test@test.com' && password==='password'){
            req.session={loggedIn:true};
            res.redirect('/'); 
        }
        else{
            res.status(401).send('Email or Password Incorrect')
        }
                
    }

    @get('/logout')
    getLogut(req:RequestWithBody,res:Response){
        req.session=undefined;
        res.redirect('/');
    }
    
}
import {Router,Request,Response,NextFunction} from 'express';


function requireAuth(req:Request,res:Response,next:NextFunction){
    if(req.session && req.session.loggedIn){
        next();
        return;
    }

    res.status(403);
    res.send('Not Permitted');
}

const router = Router();

interface RequestWithBody extends Request{
    body:{[key:string]:string|undefined}
}

router.post('/login',(req:RequestWithBody,res:Response)=>{
    const {email,password}=req.body;
  
    if(email && password && email==='test@test.com' && password==='password'){
        req.session={loggedIn:true};
        res.redirect('/');     
    }
    else{
        res.send('Email or Password Incorrect')
    }
    
})

router.get('/',(req:RequestWithBody,res:Response)=>{
    if(req.session && req.session.loggedIn){
        res.send(`
            <div>
                <div>You are Logged In</div>
                <a href='/logout'>Logut</a>
            </div>
        `)
    }
    else{
        res.send(`
            <div>
                <div>You Are Not Logged In</div>
                <a href='/login'>Login</a>
            </div>
        `)
    }
})

router.get('/logout',(req:RequestWithBody,res:Response)=>{
    req.session=undefined;
    res.redirect('/');
})

router.get('/protected',requireAuth, (req:Request,res:Response)=>{
    res.send('Welcome to Protected Route, Logged In User')
})

export {router}
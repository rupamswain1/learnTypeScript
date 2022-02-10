import express,{Request,Response,} from 'express';
import {router} from './routes/loginRoutes';
import bodyparser from 'body-parser';
import cookieSession from 'cookie-session';

import {router as controllerRouter} from './controller/decorators/controller';

import './controller/LoginController';

const app=express();

app.use(bodyparser.urlencoded({extended:true}));

app.use(cookieSession({keys:['sessionKey']}));

app.use(router);

app.use(controllerRouter)

app.listen(8000,()=>{
    console.log('Listinig on Port 8000');
    
})
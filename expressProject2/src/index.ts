import express,{Request,Response,} from 'express';
import {router} from './routes/loginRoutes';
import bodyparser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';

import './controller/LoginController';
import './controller/RootController';

const app=express();

app.use(bodyparser.urlencoded({extended:true}));

app.use(cookieSession({keys:['sessionKey']}));

app.use(router);

app.use(AppRouter.getInstance())

app.listen(8000,()=>{
    console.log('Listinig on Port 8000');
    
})
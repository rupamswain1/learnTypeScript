import {Router,Request,Response,NextFunction} from 'express';



const router = Router();

interface RequestWithBody extends Request{
    body:{[key:string]:string|undefined}
}





export {router}
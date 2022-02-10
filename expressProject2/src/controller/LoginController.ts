import {Request,Response} from 'express';
import { get } from './decorators/routes';
import { controller } from './decorators/controller';

@controller('/auth')
class LoginController{
    @get('/login')
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

}
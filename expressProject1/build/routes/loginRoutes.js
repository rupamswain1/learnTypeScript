"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
const router = express_1.Router();
exports.router = router;
router.get('/login', (req, res) => {
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
    `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'test@test.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Email or Password Incorrect');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are Logged In</div>
                <a href='/logout'>Logut</a>
            </div>
        `);
    }
    else {
        res.send(`
            <div>
                <div>You Are Not Logged In</div>
                <a href='/login'>Login</a>
            </div>
        `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to Protected Route, Logged In User');
});

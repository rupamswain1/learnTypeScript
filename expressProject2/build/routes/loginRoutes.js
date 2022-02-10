"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
var router = express_1.Router();
exports.router = router;
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'test@test.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Email or Password Incorrect');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n            <div>\n                <div>You are Logged In</div>\n                <a href='/logout'>Logut</a>\n            </div>\n        ");
    }
    else {
        res.send("\n            <div>\n                <div>You Are Not Logged In</div>\n                <a href='/login'>Login</a>\n            </div>\n        ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to Protected Route, Logged In User');
});

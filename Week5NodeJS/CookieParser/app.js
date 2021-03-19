const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(cookieParser('test'));

app.get('/', (req, res) => {
    res.cookie('name', 'stevn', { maxAge: 20000, signed: true }).send();
    console.log(req.signedCookies);

})

app.listen(3000);
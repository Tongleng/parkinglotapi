const express = require('express');
const dbJson= require('./db.json');

const server = express();

const port = process.env.port || 3030

server.get('/parkinglot', (req, res)=> res.json(dbJson))

server.listen(port, ()=> {
    console.log(`server created at port ${port}`);
})

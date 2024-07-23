import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
 const app = express();

 const port = process.env.PORT;

 app.get('/',(req, res) => {
    res.send("Hi First tute.!")
 });

 app.get('/home', (req, res) => {
    res.send("I'm at homepage thanks.")
 });

 app.listen(port, () => {
    console.log(`Listening at port: http://localhost:${port}`);
 });
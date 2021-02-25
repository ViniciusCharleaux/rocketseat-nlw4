import 'reflect-metadata';  //importante vir primeiro nos imports
import express from 'express';
import './database';
const app = express();

app.get('/', (request, response) => {
    return response.json({message: "Hello World NLW04"});
})

app.post('/', (request, response) => {

})

app.listen(3333, () => {
    console.log("Server is running!!");
})
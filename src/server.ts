import express, { response } from 'express';
import { request } from 'http';
import { send } from 'process';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: "Hello World NLW04"});
})

app.post('/', (request, response) => {

})

app.listen(3333, () => {
    console.log("Server is running!!");
})
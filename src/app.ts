import 'reflect-metadata';  //importante vir primeiro nos imports
import express from 'express';
import createConnection from './database';
import { router } from './routes';


createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };
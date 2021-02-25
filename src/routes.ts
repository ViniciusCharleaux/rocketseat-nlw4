import { Router } from 'express';
import { UserContoller } from './controllers/UserController';

const router = Router();

const userContoller = new UserContoller();

router.post("/users", userContoller.create);

export { router} ;
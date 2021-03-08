import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserContoller } from './controllers/UserController';
import { SendMailController } from './controllers/SendMailController';

const router = Router();

const userContoller = new UserContoller();
const surveysController = new SurveysController();
const sendMailController = new SendMailController(); 

router.post("/users", userContoller.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.showAll);

router.post("/sendMail", sendMailController.execute);

export { router };
import {Request, Response} from 'express';

class UserContoller {

    async create(request: Request, response: Response){
        const body = request.body;
        return response.send();
    }

}

export {UserContoller};
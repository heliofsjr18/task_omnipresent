import { Request, Response, NextFunction } from "express";
import { IEmployee } from '../models/employees/index';

export const setCountryMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    console.log('middleware');
    if (!req.body) res.status(400).send('no body info');;
    const bodyParsed = req.body;

    if (!bodyParsed.length) res.status(400).send('body info is wrong');
    const firstObj: IEmployee = bodyParsed[0];
    if (!firstObj) res.sendStatus(400).send('body is not an employee');
    console.log('end middleware');
    next();

}
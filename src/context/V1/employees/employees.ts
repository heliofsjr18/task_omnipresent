import { Router } from "express";
import EmployeesController  from "../../../controllers/employeesController";
import { setCountryMiddleware } from "../../../middlewares/setCountryMiddleware";

const router = Router();

const controller = new EmployeesController();

router.post('/setCountry', setCountryMiddleware, async (req, res, next) => {
    const { body } = req;
    res.send(await controller.setCountryOnEmployeesList(body));
})

export default router;

import { Router } from "express";
import RestCountriesController  from "../../../controllers/restCountriesController";

const router = Router();

const controller = new RestCountriesController();

router.get('/all', async (req, res, next) => {
    res.send(await controller.getAllCountries());
})

export default router;

import { Router } from "express";
import health from "./health/gethealth";
import restCountries from "./restCountries/restCountries";
import employees from "./employees/employees";

const router = Router();

router.use('/health', health);
router.use('/restCountries', restCountries);
router.use('/employees', employees);

export default router;
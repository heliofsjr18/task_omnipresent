import { Router } from "express";
import V1 from './context/V1';

const router = Router();

router.use('/v1', V1);

export = router;
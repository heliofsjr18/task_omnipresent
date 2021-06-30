import { Router } from "express";

const router = Router();

router.get('/', (req, res, next) => {
    res.send('Everything is Good here');
})

export default router;
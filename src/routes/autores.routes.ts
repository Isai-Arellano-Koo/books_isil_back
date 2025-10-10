import { Router } from "express";
import registrarAutoresHandler from "../handlers/registrarAutoresHandler";
import getAutoresHandler from "../handlers/getAutoresHandler";

const router = Router();

router.get('/registrar', registrarAutoresHandler)
router.get('/', getAutoresHandler)

export default router
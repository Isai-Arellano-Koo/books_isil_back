import { Router } from "express";
import registrarAutoresHandler from "../handlers/registrarAutoresHandler";
import getAutoresHandler from "../handlers/getAutoresHandler";
import getAutorForIdHandler from "../handlers/getAutorForIdHandler";

const router = Router();

router.get('/registrar', registrarAutoresHandler)
router.get('/', getAutoresHandler)
router.get('/:id', getAutorForIdHandler)

export default router
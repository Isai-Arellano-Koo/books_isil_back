import { Router } from "express";
import registrarCategoriasHandler from "../handlers/registrarCategoriasHandler";
import getCategoriasHandler from "../handlers/getCategoriasHandler";

const router = Router();

router.get('/registrar', registrarCategoriasHandler)
router.get('/', getCategoriasHandler)

export default router
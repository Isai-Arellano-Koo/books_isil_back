import { Router } from "express";
import registrarCategoriasHandler from "../handlers/registrarCategoriasHandler";
import getCategoriasHandler from "../handlers/getCategoriasHandler";
import getCategoriasForIdHandler from "../handlers/getCategoriasForIdHandler";

const router = Router();

router.get('/registrar', registrarCategoriasHandler)
router.get('/', getCategoriasHandler)
router.get('/:id', getCategoriasForIdHandler)


export default router
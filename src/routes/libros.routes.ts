import { Router } from "express";
import registrarLibrosHandler from "../handlers/registrarLibrosHandler";
import getLibrosHandler from "../handlers/getLibrosHandler";
import getLibroForIdHandler from "../handlers/getLibroForIdHandler";
import getLibrosFilteredHandler from "../handlers/getLibrosFilteredHandler";

const router = Router();

router.get('/registrar', registrarLibrosHandler)
router.get('/', getLibrosHandler)
router.get('/detalle', getLibroForIdHandler)
router.get('/filtros', getLibrosFilteredHandler)

export default router
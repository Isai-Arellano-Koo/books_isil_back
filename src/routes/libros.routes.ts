import { Router } from "express";
import registrarLibrosHandler from "../handlers/registrarLibrosHandler";
import getLibrosHandler from "../handlers/getLibrosHandler";
import getLibroForIdHandler from "../handlers/getLibroForIdHandler";

const router = Router();

router.get('/registrar', registrarLibrosHandler)
router.get('/', getLibrosHandler)
router.get('/detalle', getLibroForIdHandler)

export default router
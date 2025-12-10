import { Router } from "express";
import registrarLibrosHandler from "../handlers/registrarLibrosHandler";
import getLibrosHandler from "../handlers/getLibrosHandler";
import getLibroForIdHandler from "../handlers/getLibroForIdHandler";
import getLibrosFilteredHandler from "../handlers/getLibrosFilteredHandler";
import postNuevoLibroHandler from "../handlers/postNuevoLibroHandler";
import upload from "../middlewares/uploadImage";
import deleteLibroHandler from "../handlers/deleteLibroHandler";
import putLibroHandler from "../handlers/putLibroHandler";


const router = Router();

router.get('/registrar', registrarLibrosHandler)
router.get('/', getLibrosHandler)
router.get('/detalle', getLibroForIdHandler)
router.get('/filtros', getLibrosFilteredHandler)
router.post('/nuevolibro', upload.single("imagen"), postNuevoLibroHandler)
router.delete("/delete", deleteLibroHandler);
router.put('/update', putLibroHandler);

export default router
import { Router } from "express";
import registrarLibrosHandler from "../handlers/registrarLibrosHandler";
import getLibrosHandler from "../handlers/getLibrosHandler";

const router = Router();

router.get('/registrar', registrarLibrosHandler)
router.get('/', getLibrosHandler)

export default router
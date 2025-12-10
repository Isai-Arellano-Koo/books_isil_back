import { Router } from "express";
import loginClienteHandler from "../handlers/loginClienteHandler";
import registrarClientesHandler from "../handlers/registrarClientesHandler";
import getClientesHandler from "../handlers/getClientesHandler";


const router = Router();

router.post("/login", loginClienteHandler);
router.post("/registrar", registrarClientesHandler)
router.get("/", getClientesHandler)

export default router
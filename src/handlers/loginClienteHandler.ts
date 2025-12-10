// handlers/loginClienteHandler.ts
import { Request, Response } from "express";
import loginClienteController from "../controllers/loginClienteController";

const loginClienteHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await loginClienteController(email, password);

    // retorna -1, -2 ó {0, cliente}
    if (result === -1) return res.json({ status: -1, message: "Correo incorrecto" });
    if (result === -2) return res.json({ status: -2, message: "Contraseña incorrecta" });

    return res.json({
      status: 0,
      message: "Login exitoso",
      data: result, // cliente sin password
    });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error interno en login" });
  }
};

export default loginClienteHandler;

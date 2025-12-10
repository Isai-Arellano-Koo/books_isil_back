// handlers/registrarClientesHandler.ts
import { Request, Response } from "express";
import registrarClientesController from "../controllers/registrarClientesController";

const registrarClientesHandler = async (req: Request, res: Response) => {
  try {
    const { nombre, email, password } = req.body;

    const result = await registrarClientesController({
      nombre,
      email,
      password
    });

    if (result === -1) {
      return res.json({
        status: -1,
        message: "El correo ya está registrado"
      });
    }

    return res.status(201).json({
      status: 0,
      message: "Cliente registrado correctamente",
      data: result
    });
  } catch (error) {
    console.error("Error registrando cliente:", error);
    res.status(500).json({ error: "Error interno al registrar cliente" });
  }
};

export default registrarClientesHandler;

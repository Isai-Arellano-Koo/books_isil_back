import { Request, Response } from "express";
import registrarAutoresController from "../controllers/registrarAutoresController";


const registrarAutoresHandler = async (req: Request, res: Response) => {
  try {
    const response = await registrarAutoresController();
    res.status(201).json({
      message: "Autores registrados correctamente",
      data: response,
    });
  } catch (error: any) {
    console.error("Error al registrar autores:", error);
    res.status(500).json({ error: "Error al registrar autores" });
  }
};

export default registrarAutoresHandler;

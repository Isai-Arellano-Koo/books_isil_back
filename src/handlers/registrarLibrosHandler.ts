import { Request, Response } from "express";
import registrarLibrosController from "../controllers/registrarLibrosController";

const registrarLibrosHandler = async (req: Request, res: Response) => {
  try {
    const response = await registrarLibrosController();
    res.status(201).json({
      message: "Libros registrados correctamente",
      data: response,
    });
  } catch (error: any) {
    console.error("Error al registrar libros:", error);
    res.status(500).json({ error: "Error al registrar libros" });
  }
};

export default registrarLibrosHandler;

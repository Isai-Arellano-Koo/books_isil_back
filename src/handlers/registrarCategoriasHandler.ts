import { Request, Response } from "express";
import registrarCategoriasController from "../controllers/registrarCategoriasController";

const registrarCategoriasHandler = async (req: Request, res: Response) => {
  try {
    const response = await registrarCategoriasController();
    res.status(201).json({
      message: "Categorias registrados correctamente",
      data: response,
    });
  } catch (error: any) {
    console.error("Error al registrar categorias:", error);
    res.status(500).json({ error: "Error al registrar categorias" });
  }
};

export default registrarCategoriasHandler;

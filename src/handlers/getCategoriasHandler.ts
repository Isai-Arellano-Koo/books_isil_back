import { Request, Response } from "express";
import getCategoriasController from "../controllers/getCategoriasController";


const getCategoriasHandler = async (req: Request, res: Response) => {
  try {
    const response = await getCategoriasController();
    res.status(200).json({
      message: "✅ Categorías obtenidas correctamente",
      data: response,
    });
  } catch (error: any) {
    console.error("❌ Error al obtener categorías:", error);
    res.status(500).json({
      error: "Error al obtener las categorías",
    });
  }
};

export default getCategoriasHandler;

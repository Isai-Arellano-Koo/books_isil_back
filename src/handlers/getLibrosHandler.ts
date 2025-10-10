import { Request, Response } from "express";
import getLibrosController from "../controllers/getLibrosController";


const getLibrosHandler = async (req: Request, res: Response) => {
  try {
    const response = await getLibrosController();
    res.status(200).json({
      message: "Libros obtenidos correctamente",
      data: response,
    });
  } catch (error: any) {
    console.error("Error al obtener libros:", error);
    res.status(500).json({
      error: "Error al obtener los libros",
    });
  }
};

export default getLibrosHandler;

import { Request, Response } from "express";
import getAutoresController from "../controllers/getAutoresController";

const getAutoresHandler = async (req: Request, res: Response) => {
  try {
    const response = await getAutoresController();
    res.status(200).json({
      message: "Autores obtenidos correctamente",
      data: response,
    });
  } catch (error: any) {
    console.error("Error al obtener autores:", error);
    res.status(500).json({
      error: "Error al obtener los autores",
    });
  }
};

export default getAutoresHandler;

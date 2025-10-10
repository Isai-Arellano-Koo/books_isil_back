import { Request, Response } from "express";
import getLibroForIdController from "../controllers/getLibroForIdController";

const getLibroForIdHandler = async (req: Request, res: Response) => {
  try {
     const { id } = req.query;
     console.log("Query recibida:", req.query);


    // Validación: debe existir y ser un número válido
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({
        message: "Debe proporcionar un ID numérico válido en la query (?id=1)",
      });
    }
    const libro = await getLibroForIdController(Number(id));

    if (!libro) {
      return res.status(404).json({
        message: "Libro no encontrado",
      });
    }

    res.status(200).json({
      message: "Libro obtenido correctamente",
      data: libro,
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Error al obtener el libroo",
      errorr: error.message
    });
  }
};
export default getLibroForIdHandler;

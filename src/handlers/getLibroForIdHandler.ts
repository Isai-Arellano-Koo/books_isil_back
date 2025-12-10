import { Request, Response } from "express";
import getLibroForIdController from "../controllers/getLibroForIdController";

const getLibroForIdHandler = async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    console.log("Query recibida:", req.query);

    // Validación: debe existir
    if (!id) {
      return res.status(400).json({
        message: "Debe proporcionar un ID válido en la query (?id=1)",
      });
    }
    const libro = await getLibroForIdController(id);

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
      errorr: error.message,
    });
  }
};
export default getLibroForIdHandler;

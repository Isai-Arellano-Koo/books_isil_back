// handlers/registrarLibrosHandler.ts
import { Request, Response } from "express";
import postNuevoLibroController from "../controllers/postNuevoLibroController";

const postNuevoLibroHandler = async (req: Request, res: Response) => {
  try {
    // Datos del form
    const { titulo, id_autor, id_categoria, anio_publicacion, precio, stock, estado } = req.body;

    // Imagen subida (si existe)
    const imagen = req.file ? `${req.file.filename}` : null;

    const response = await postNuevoLibroController({
      titulo,
      id_autor,
      id_categoria,
      estado,
      anio_publicacion,
      precio,
      stock,
      imagen,
    });

    res.status(201).json({
      message: "Libro registrado correctamente",
      data: response,
    });
  } catch (error: any) {
    console.error("Error al registrar libro:", error);
    res.status(500).json({ error: "Error al registrar libro" });
  }
};

export default postNuevoLibroHandler;

import { Request, Response } from "express";
import deleteLibroController from "../controllers/deleteLibroController";

const deleteLibroHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({
        message: "Debe proporcionar un ID válido (?id=uuid)",
      });
    }

    const result = await deleteLibroController(id);

    if (!result.success) {
      return res.status(404).json({ message: result.message });
    }

    return res.status(200).json({
      message: "Libro eliminado correctamente",
      data: result.data,
    });

  } catch (error: any) {
    return res.status(500).json({
      message: "Error al eliminar el libro",
      error: error.message,
    });
  }
};

export default deleteLibroHandler;

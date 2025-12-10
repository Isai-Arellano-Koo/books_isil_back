import { Request, Response } from "express";
import putLibroController from "../controllers/putLibroController";

const putLibroHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Debe proporcionar un ID válido (?id=uuid)" });
    }

    const updateData = req.body; // Aquí vienen los campos a actualizar

    const result = await putLibroController(id, updateData);

    if (!result.success) {
      return res.status(404).json({ message: result.message });
    }

    return res.status(200).json({
      message: "Libro actualizado correctamente",
      data: result.data,
    });

  } catch (error: any) {
    return res.status(500).json({
      message: "Error al actualizar el libro",
      error: error.message,
    });
  }
};

export default putLibroHandler;

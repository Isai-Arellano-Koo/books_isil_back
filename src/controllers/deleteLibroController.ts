import db from "../models";
import fs from "fs";
import path from "path";

const {Libro} = db;

const deleteLibroController = async (id: string) => {
  try {
    // 1. Buscar libro
    const libro = await Libro.findOne({ where: { id_libro: id } });

    if (!libro) {
      return { success: false, message: "El libro no existe" };
    }

    // 2. Eliminar imagen si existe
    if (libro.imagen) {
      const rutaImagen = path.join(__dirname, "../../uploads/", libro.imagen);

      if (fs.existsSync(rutaImagen)) {
        fs.unlinkSync(rutaImagen);
      }
    }

    // 3. Eliminar registro
    await libro.destroy();

    return {
      success: true,
      message: "Libro eliminado",
      data: libro,
    };

  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default deleteLibroController;

import db from "../models";
const { Libro } = db;

interface UpdateLibroData {
  titulo?: string;
  anio_publicacion?: string;
  precio?: number;
  id_autor?: number;
  id_categoria?: number;
  stock?: number;
  estado?: string;
  imagen?: string;
  // Agrega aquí otros campos que tengas en el modelo
}

const putLibroController = async (id: string, data: UpdateLibroData) => {
  try {
    // Buscar el libro por id
    const libro = await Libro.findByPk(id);
    if (!libro) {
      return { success: false, message: "Libro no encontrado" };
    }

    // Evitar actualizar id e imagen
    const { id_autor: _ignoreId, imagen: _ignoreImagen, ...updateData } = data;

    // Actualizar el libro
    await libro.update(updateData);

    return { success: true, data: libro };
  } catch (error: any) {
    console.error(error);
    return { success: false, message: "Error al actualizar libro", error: error.message };
  }
};

export default putLibroController;

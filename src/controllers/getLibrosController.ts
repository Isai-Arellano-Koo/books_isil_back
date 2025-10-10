import db from "../../models";

const { Libro, Autor, Categoria } = db;

const getLibrosController = async () => {
  try {
    // Busca todos los libros y los asocia con autor y categoría
    const libros = await Libro.findAll({
      include: [
        { model: Autor, as: "autor" },
        { model: Categoria, as: "categoria" },
      ],
    });

    return libros;
  } catch (error) {
    console.error("❌ Error en getLibrosController:", error);
    throw error;
  }
};

export default getLibrosController;

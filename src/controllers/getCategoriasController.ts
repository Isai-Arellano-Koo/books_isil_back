import db from "../models";

const { Categoria } = db;

const getCategoriasController = async () => {
  try {
    const categorias = await Categoria.findAll();
    return categorias;
  } catch (error) {
    console.error("❌ Error en getCategoriasController:", error);
    throw error;
  }
};

export default getCategoriasController;

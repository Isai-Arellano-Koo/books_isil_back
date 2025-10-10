import db from "../models";

const { Autor } = db;

const getAutoresController = async () => {
  try {
    const autores = await Autor.findAll();
    return autores;
  } catch (error) {
    console.error("❌ Error en getAutoresController:", error);
    throw error;
  }
};

export default getAutoresController;

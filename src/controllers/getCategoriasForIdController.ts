import db from "../models";

const { Categoria } = db;

const getCategoriasForIdController = async (id: number) => {
    try {
        const categoria = await Categoria.findByPk(id);
        return categoria;
    } catch (error) {
        console.error(" Error en getCategoriasForIdController:", error);
        throw error;
    }
}

export default getCategoriasForIdController;
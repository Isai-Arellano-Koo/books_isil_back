import db from "../models";

const { Autor } = db;

const getAutorForIdController = async (id: number) => {
    try {
        const autor = await Autor.findByPk(id);
        return autor;
    } catch (error) {
        console.error(" Error en getAutorForIdController:", error);
        throw error;
    }
}

export default getAutorForIdController;
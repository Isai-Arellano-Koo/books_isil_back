import db from "../models";

const { Libro, Autor, Categoria } = db;

const getLibroForIdController = async (id: number) => {
    try {
        const libro = await Libro.findByPk(id, {
            include: [
                { model: Autor, as: "autor" },
                { model: Categoria, as: "categoria" },
            ],
        });
        return libro;
    } catch (error) {
        console.error(" Error en getLibroForIdController:", error);
        throw error;
    }
}

export default getLibroForIdController;
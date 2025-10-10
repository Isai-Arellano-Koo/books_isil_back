import { Request, Response } from "express";
import getCategoriasForIdController from "../controllers/getCategoriasForIdController";

const getCategoriasForIdHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (id) {
            const categoria = await getCategoriasForIdController(parseInt(id));
            res.status(200).json({
            message: "Categoria obtenido correctamente",
            data: categoria,
        });
        } else {
            res.status(400).json({message: "Error al obtener el libro"})
        }
        
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el libro",
        });
    }
}
export default getCategoriasForIdHandler;
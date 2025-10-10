import { Request, Response } from "express";
import getAutorForIdController from "../controllers/getAutorForIdController";

const getAutorForIdHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (id) {
            const autor = await getAutorForIdController(parseInt(id));
            res.status(200).json({
            message: "autor obtenido correctamente",
            data: autor,
        });
        } else {
            res.status(400).json({message: "Error al obtener el autor"})
        }
        
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el autor",
        });
    }
}
export default getAutorForIdHandler;
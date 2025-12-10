import { Request, Response } from 'express';
import getClientesController from "../controllers/getClientesController";

const getClientesHandler = async (req: Request, res: Response) => {
    try {
        const clientes = await getClientesController();
       res.status(200).json(clientes);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export default getClientesHandler;
import { Request, Response } from "express";
import getLibrosFilteredController from "../controllers/getLibrosFilteredController";

const getLibrosFilteredHandler = async (req: Request, res: Response) => {
  try {
    const { category, order, items, page, campo } = req.query;
    const libros = await getLibrosFilteredController({
      category: category as string,
      order: (order as string) || "ASC",
      items: Number(items) || 10,
      page: Number(page) || 1,
      campo: (campo as string) || "titulo"
    });
    res.status(200).json(libros);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default getLibrosFilteredHandler;

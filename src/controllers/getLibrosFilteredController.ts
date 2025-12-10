import db from "../models";
import { Op } from "sequelize";

const { Libro, Autor, Categoria } = db;

interface FilterOptions {
  category?: string;
  order?: string;
  items?: number;
  page?: number;
  campo?: string;
}

const getLibrosFilteredController = async ({
  category,
  order = "ASC",
  items = 10,
  page = 1,
  campo = "titulo"
}: FilterOptions) => {
  const offset = (page - 1) * items;

  const whereClause =
    category && category !== "all"
      ? { "$categoria.nombre_categoria$": { [Op.iLike]:  `%${category}%` } }
      : undefined;

  const libros = await Libro.findAndCountAll({
    include: [
      { model: Autor, as: "autor" },
      { model: Categoria, as: "categoria" }
    ],
    where: whereClause,
    order: [[campo, order]],
    limit: items,
    offset,
  });

  const total_libros = libros.count;
  const total_pages = Math.ceil(Number(total_libros) / items);

  return {
    message: "Libros obtenidos correctamente",
    total_libros,
    total_pages,
    page,
    items,
    data: libros.rows,
  };
};

export default getLibrosFilteredController;

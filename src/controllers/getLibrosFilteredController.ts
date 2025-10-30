import db from "../models";

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

  // Construimos el filtro de categoría
  const whereClause: any = {};
  if (category && category !== "all") {
    whereClause["$categoria.nombre_categoria$"] = category;
  }

  const libros = await Libro.findAll({
    where: whereClause,
    include: [
      { model: Autor, as: "autor" },
      { model: Categoria, as: "categoria" },
    ],
    order: [[campo, order]], // Ordena por título
    limit: items,
    offset,
  });

  const {count: total_libros} = await Libro.findAndCountAll()

  return {
    message: "Libros obtenidos  correctamente",
    total_libros,
    page,
    items,
    data: libros,
  };
};

export default getLibrosFilteredController;

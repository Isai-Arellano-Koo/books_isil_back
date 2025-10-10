import db from "../models";

const { Categoria } = db;

const registrarCategoriasController = async () => {
  const categorias = [ {
      id_categoria: 1,
      nombre_categoria: "Ficción",
      descripcion: "Libros de narrativa imaginativa",
      estado: "Activo",
    },
    {
      id_categoria: 2,
      nombre_categoria: "Ciencia",
      descripcion: "Libros científicos y de divulgación",
      estado: "Activo",
    },
    {
      id_categoria: 3,
      nombre_categoria: "Historia",
      descripcion: "Libros históricos",
      estado: "Activo",
    },
    {
      id_categoria: 4,
      nombre_categoria: "Tecnología",
      descripcion: "Libros sobre avances tecnológicos",
      estado: "Activo",
    },
    {
      id_categoria: 5,
      nombre_categoria: "Autoayuda",
      descripcion: "Libros de desarrollo personal",
      estado: "Activo",
    },];

  // Inserta todos los libros a la vez
  const nuevosLibros = await Categoria.bulkCreate(categorias, {
    ignoreDuplicates: true, // evita error si ya existen
  });

  return nuevosLibros;
};

export default registrarCategoriasController;

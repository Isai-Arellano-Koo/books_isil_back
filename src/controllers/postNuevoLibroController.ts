import db from "../models";

const { Libro } = db;

interface LibroData {
  titulo: string;
  id_autor: string;
  id_categoria: number;
  estado: string;
  anio_publicacion: string;
  precio: number;
  stock: number;
  imagen: string | null;
}

const postNuevoLibroController = async (data: LibroData) => {
  const nuevoLibro = await Libro.create({
    titulo: data.titulo,
    id_autor: data.id_autor,
    id_categoria: data.id_categoria,
    estado: data.estado,
    anio_publicacion: data.anio_publicacion,
    precio: data.precio,
    stock: data.stock,
    imagen: data.imagen,
  });

  return nuevoLibro;
};

export default postNuevoLibroController;

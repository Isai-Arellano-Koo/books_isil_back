import db from "../models";

const { Autor } = db;

const registrarAutoresController = async () => {
  const categorias = [
    { id_autor: 1, nombre_autor: "Gabriel García Márquez", estado: "Activo" },
    { id_autor: 2, nombre_autor: "Isabel Allende", estado: "Activo" },
    { id_autor: 3, nombre_autor: "Mario Vargas Llosa", estado: "Activo" },
    { id_autor: 4, nombre_autor: "Carlos Ruiz Zafón", estado: "Activo" },
    { id_autor: 5, nombre_autor: "Laura Esquivel", estado: "Activo" },
    { id_autor: 6, nombre_autor: "Julio Cortázar", estado: "Activo" },
    { id_autor: 7, nombre_autor: "Jorge Luis Borges", estado: "Activo" },
    { id_autor: 8, nombre_autor: "Juan Rulfo", estado: "Activo" },
    { id_autor: 9, nombre_autor: "Juan Villoro", estado: "Activo" },
    { id_autor: 10, nombre_autor: "Carlos Fuentes", estado: "Activo" },
    { id_autor: 14, nombre_autor: "Abraham Valdomar", estado: "Activo" },
    { id_autor: 15, nombre_autor: "Alfredo Bryce Echenique", estado: "Activo" },
  ];

  // Inserta todos los libros a la vez
  const nuevosLibros = await Autor.bulkCreate(categorias, {
    ignoreDuplicates: true, // evita error si ya existen
  });

  return nuevosLibros;
};

export default registrarAutoresController;

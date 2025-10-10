import db from "../models";

const { Libro } = db;

const registrarLibrosController = async () => {
  const libros = [
    {
      id_libro: 1,
      titulo: "Cien años de soledad",
      anio_publicacion: "1967",
      precio: 59.9,
      stock: 30,
      estado: "No disponible",
      id_categoria: 1,
      id_autor: 1,
      imagen: "cien_anios_de_soledad.jpg"
    },
    {
      id_libro: 2,
      titulo: "La casa de los espíritus",
      anio_publicacion: "1982",
      precio: 49.5,
      stock: 25,
      estado: "Disponible",
      id_categoria: 5,
      id_autor: 2,
      imagen: "la_casa_de_los_espiritu.jpg"
    },
    {
      id_libro: 3,
      titulo: "Conversación en La Catedral",
      anio_publicacion: "1969",
      precio: 55.0,
      stock: 22,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 3,
      imagen: "conversacion_en_la_catedral.jpg"
    },
    {
      id_libro: 4,
      titulo: "La sombra del viento",
      anio_publicacion: "2001",
      precio: 60.0,
      stock: 35,
      estado: "Disponible",
      id_categoria: 3,
      id_autor: 4,
      imagen: "la_sombra_del_viento.jpg"
    },
    {
      id_libro: 5,
      titulo: "Como agua para chocolate",
      anio_publicacion: "1989",
      precio: 48.75,
      stock: 20,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 5,
      imagen: "como_agua_para_chocolate.jpg"
    },
    {
      id_libro: 6,
      titulo: "Rayuela",
      anio_publicacion: "1963",
      precio: 52.0,
      stock: 18,
      estado: "No disponible",
      id_categoria: 1,
      id_autor: 6,
      imagen: "rayuela.jpg"
    },
    {
      id_libro: 7,
      titulo: "Ficciones",
      anio_publicacion: "1944",
      precio: 45.0,
      stock: 15,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 7,
      imagen: "ficciones.jpg"
    },
    {
      id_libro: 8,
      titulo: "Pedro Páramo",
      anio_publicacion: "1955",
      precio: 43.0,
      stock: 28,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 8,
      imagen: "pedro_paramo.jpg"
    },
    {
      id_libro: 9,
      titulo: "El amor en los tiempos del cólera",
      anio_publicacion: "1985",
      precio: 58.0,
      stock: 32,
      estado: "Disponible",
      id_categoria: 3,
      id_autor: 1,
      imagen: "el_amor_en_los_tiempos_del_colera.jpg"
    },
    {
      id_libro: 10,
      titulo: "Paula",
      anio_publicacion: "1994",
      precio: 46.5,
      stock: 24,
      estado: "No disponible",
      id_categoria: 5,
      id_autor: 2,
      imagen: "paula.jpg"
    },
    {
      id_libro: 11,
      titulo: "Lituma en los Andes",
      anio_publicacion: "1993",
      precio: 49.9,
      stock: 21,
      estado: "No disponible",
      id_categoria: 3,
      id_autor: 3,
      imagen: "lituma_en_los_andes.jpg"
    },
    {
      id_libro: 12,
      titulo: "El juego del ángel",
      anio_publicacion: "2008",
      precio: 61.0,
      stock: 29,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 4,
      imagen: "el_juego_del_angel.jpg"
    },
    {
      id_libro: 13,
      titulo: "Tan veloz como el deseo",
      anio_publicacion: "2001",
      precio: 47.5,
      stock: 26,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 5,
      imagen: "tan_veloz_como_el_deseo.jpg"
    },
    {
      id_libro: 14,
      titulo: "Bestiario",
      anio_publicacion: "1951",
      precio: 39.9,
      stock: 17,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 6,
      imagen: "bestiario.jpg"
    },
    {
      id_libro: 15,
      titulo: "El Aleph",
      anio_publicacion: "1949",
      precio: 44.0,
      stock: 19,
      estado: "No disponible",
      id_categoria: 3,
      id_autor: 7,
      imagen: "el_aleph.jpg"
    },
    {
      id_libro: 16,
      titulo: "El llano en llamas",
      anio_publicacion: "1953",
      precio: 41.0,
      stock: 23,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 8,
      imagen: "el_llano_en_llamas.jpg"
    },
    {
      id_libro: 17,
      titulo: "Crónica de una muerte anunciada",
      anio_publicacion: "1981",
      precio: 50.0,
      stock: 27,
      estado: "Disponible",
      id_categoria: 3,
      id_autor: 1,
      imagen: "cronica_de_una_muerte_anunciada.jpg"
    },
    {
      id_libro: 18,
      titulo: "De amor y de sombra",
      anio_publicacion: "1984",
      precio: 46.75,
      stock: 16,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 2,
      imagen: "de_amor_y_de_sombra.jpg"
    },
    {
      id_libro: 19,
      titulo: "Travesuras de la niña mala",
      anio_publicacion: "2006",
      precio: 53.5,
      stock: 20,
      estado: "No disponible",
      id_categoria: 1,
      id_autor: 3,
      imagen: "travesuras_de_la_ninia_mala.jpg"
    },
    {
      id_libro: 20,
      titulo: "Marina",
      anio_publicacion: "1999",
      precio: 59.0,
      stock: 22,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 4,
      imagen: "marina.jpg"
    },
    {
      id_libro: 21,
      titulo: "El diario de Tita",
      anio_publicacion: "2016",
      precio: 48.0,
      stock: 18,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 5,
      imagen: "el_diario_de_tita.jpg"
    },
    {
      id_libro: 22,
      titulo: "Final del juego",
      anio_publicacion: "1956",
      precio: 42.0,
      stock: 15,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 6,
      imagen: "final_del_juego.jpg"
    },
    {
      id_libro: 23,
      titulo: "El informe de Brodie",
      anio_publicacion: "1970",
      precio: 43.5,
      stock: 14,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 7,
      imagen: "el_informe_de_brodie.jpg"
    },
    {
      id_libro: 24,
      titulo: "Diles que no me maten",
      anio_publicacion: "1953",
      precio: 41.25,
      stock: 13,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 8,
      imagen: "diles_que_no_me_maten.jpg"
    },
    {
      id_libro: 25,
      titulo: "Relato de un náufrago",
      anio_publicacion: "1970",
      precio: 45.0,
      stock: 19,
      estado: "No disponible",
      id_categoria: 3,
      id_autor: 1,
      imagen: "relato_de_un_naufrago.jpg"
    },
    {
      id_libro: 26,
      titulo: "La isla bajo el mar",
      anio_publicacion: "2009",
      precio: 54.0,
      stock: 16,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 2,
      imagen: "la_isla_bajo_el_mar.jpg"
    },
    {
      id_libro: 27,
      titulo: "La ciudad y los perros",
      anio_publicacion: "1963",
      precio: 56.0,
      stock: 30,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 3,
      imagen: "la_ciudad_y_los_perros.jpg"
    },
    {
      id_libro: 28,
      titulo: "El laberinto de los espíritus",
      anio_publicacion: "2016",
      precio: 65.0,
      stock: 27,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 4,
      imagen: "el_laberinto_de_los_espiritu.jpg"
    },
    {
      id_libro: 29,
      titulo: "El libro salvaje",
      anio_publicacion: "2008",
      precio: 39.9,
      stock: 31,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 9,
      imagen: "el_libro_salvaje.jpg"
    },
    {
      id_libro: 30,
      titulo: "Aura",
      anio_publicacion: "1962",
      precio: 44.5,
      stock: 28,
      estado: "Disponible",
      id_categoria: 1,
      id_autor: 10,
      imagen: "aura.jpg"
    },
  ];

  // Inserta todos los libros a la vez
  const nuevosLibros = await Libro.bulkCreate(libros, {
    ignoreDuplicates: true, // evita error si ya existen
  });

  return nuevosLibros;
};

export default registrarLibrosController;

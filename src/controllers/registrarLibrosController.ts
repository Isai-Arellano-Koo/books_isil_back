import db from "../models";

const { Libro } = db;

const registrarLibrosController = async () => {
  const libros = [
  {
    id_libro: "79306538-0c60-48fd-abe0-f401a8c9d556",
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
    id_libro: "5f6f76c4-9e46-4e9f-b3ce-0f1b94869a32",
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
    id_libro: "8c4c5d34-2257-4e34-b6a4-43f4aa59c3ec",
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
    id_libro: "b1cc8925-e48b-4f30-8b41-42aab8d3ad46",
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
    id_libro: "dcb6711d-dc48-42ee-8f94-e4d38d4b21f1",
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
    id_libro: "93d15f91-f15a-449a-a248-9fd72b8830d1",
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
    id_libro: "df673a60-fad9-4a5b-bcec-831c099b45df",
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
    id_libro: "6a39d65a-fc1a-490c-ae11-8ef7845a8aca",
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
    id_libro: "45e301f0-0c6e-4cf2-ba0f-b3b4a5e2aea7",
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
    id_libro: "f77d9fe7-5960-4a5c-9f4d-59279e3ca49b",
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
    id_libro: "6b9c3498-fa44-4bc1-8ff0-266c486e8f78",
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
    id_libro: "9f2a4d47-dc18-4d08-8e39-9bdb71b604c3",
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
    id_libro: "7cda545e-5fcb-4e3f-b48e-0610f842f4c6",
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
    id_libro: "2bf02a4a-433c-4f35-95b8-1af8ae2b4807",
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
    id_libro: "3f69cab3-69c1-45b3-96c4-2beace9c29a3",
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
    id_libro: "5be300ae-2be2-4f5f-a36c-4fb44b965a85",
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
    id_libro: "6e2d5006-3863-4f70-9f8e-d61e3e511750",
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
    id_libro: "933ba6cb-bd66-4f2a-8dc4-7f6c8fec2f22",
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
    id_libro: "c5938198-83cc-49c3-aee3-d912b96e3d28",
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
    id_libro: "772fe69e-10a1-4f1e-b9e2-5d7a284dfc77",
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
    id_libro: "12ec398b-873b-4260-b6e1-fc8fb6d1a73e",
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
    id_libro: "1c3d61e1-1040-478a-b1ea-e6b78e09c2f7",
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
    id_libro: "c46d91fc-00e3-44e4-9d77-a9e0f4e6c499",
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
    id_libro: "e5cb8ed1-2e46-4af1-b4bc-cc342a2b17d2",
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
    id_libro: "7a22e327-b036-48b4-a785-7d69f49ad71f",
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
    id_libro: "6ae1dcb6-f622-4f6d-a045-b305fee54850",
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
    id_libro: "08a99039-4bbd-4f69-bb5f-97cd8074c2ef",
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
    id_libro: "e5105f12-33b4-47d6-9e8c-56448d1730ea",
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
    id_libro: "c0138c57-2556-4ba8-a628-3d2bbaafd518",
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
    id_libro: "b4c34028-9cc3-4c48-81fc-c87f8fd957ec",
    titulo: "Aura",
    anio_publicacion: "1962",
    precio: 44.5,
    stock: 28,
    estado: "Disponible",
    id_categoria: 1,
    id_autor: 10,
    imagen: "aura.jpg"
  }
];
  // Inserta todos los libros a la vez
  const nuevosLibros = await Libro.bulkCreate(libros, {
    ignoreDuplicates: true, // evita error si ya existen
  });

  return nuevosLibros;
};

export default registrarLibrosController;

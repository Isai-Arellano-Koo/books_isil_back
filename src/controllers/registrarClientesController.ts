// controllers/registrarClientesController.ts
import db from "../models";

const { Cliente } = db;

interface ClienteData {
  nombre: string;
  email: string;
  password: string;
}

const registrarClientesController = async (data: ClienteData) => {
  // Validar si el email ya existe
  const existe = await Cliente.findOne({ where: { email: data.email } });

  if (existe) return -1;

  // Crear nuevo cliente
  const nuevoCliente = await Cliente.create({
    nombre: data.nombre,
    email: data.email,
    password: data.password
  });

  // Devolver sin la contraseña
  const clienteJSON = nuevoCliente.toJSON();
  delete clienteJSON.password;

  return clienteJSON;
};

export default registrarClientesController;

import db from "../models";

const { Cliente } = db;

const loginClienteController = async (email: string, password: string) => {
  const cliente = await Cliente.findOne({ where: { email } });

  // -1 si el correo no existe
  if (!cliente) return -1;

  // -2 si la contraseña no coincide
  if (cliente.password !== password) return -2;

  // devolver cliente sin password
  const clienteJSON = cliente.toJSON();
  delete clienteJSON.password;

  return clienteJSON; // status 0
};

export default loginClienteController;

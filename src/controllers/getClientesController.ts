import db from "../models";

const { Cliente } = db;

const getClientesController = async () => {
    try {
        const clientes = await Cliente.findAll();
        return clientes;
    } catch (error) {
        return error;
    }
}

export default getClientesController;
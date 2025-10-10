import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { sequelize } from '../config/db';

// Tipado
type ModelDefiner = (sequelize: Sequelize) => any;

// Directorio actual
const basename = path.basename(__filename);

// Objeto para almacenar modelos
const db: { [key: string]: any } = {};

// Leer todos los archivos de modelos, excepto este archivo
fs.readdirSync(__dirname)
  .filter(
    (file) =>
       file !== basename &&
      (file.endsWith('.ts') || file.endsWith('.js')) &&
      !file.endsWith('.d.ts')
  )
  .forEach((file) => {
    const modelPath = path.join(__dirname, file);
    const modelModule = require(modelPath);

    // Obtener el modelo exportado (sea default o no)
    const model = modelModule.default || modelModule;

    // Registrar el modelo en Sequelize
    const sequelizeModel = model(sequelize);
    db[sequelizeModel.name] = sequelizeModel;
  });

// Realizar las asociaciones si los modelos las tienen definidas
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db); // cada modelo puede usar db para asociarse con otros
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

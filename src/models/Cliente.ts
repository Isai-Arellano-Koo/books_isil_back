// models/Cliente.ts
import { Sequelize, DataTypes, Model } from "sequelize";

class Cliente extends Model {
  public id_cliente!: string;
  public email!: string;
  public password!: string;
  public nombre!: string;
}

export default (sequelize: Sequelize) => {
  Cliente.init(
    {
      id_cliente: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Cliente",
      modelName: "Cliente",
      timestamps: true,
    }
  );

  return Cliente;
};

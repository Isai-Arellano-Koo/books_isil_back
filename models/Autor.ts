import { Sequelize, DataTypes, Model } from "sequelize";

export default (sequelize: Sequelize) => {
  class Autor extends Model {
    public id_autor!: number;
    public nombre!: string;
    public estado!: string;

    static associate(models: any) {
      Autor.hasMany(models.Libro, {
        foreignKey: "id_autor",
        as: "libros",
      });
    }
  }

  Autor.init(
    {
      id_autor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_autor: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
       estado: {
        type: DataTypes.ENUM("Activo", "Inactivo"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Autor",
      tableName: "Autor",
      timestamps: false,
    }
  );

  return Autor;
};

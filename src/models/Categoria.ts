import { Sequelize, DataTypes, Model } from "sequelize";

export default (sequelize: Sequelize) => {
  class Categoria extends Model {
    public id_categoria!: number;
    public nombre_categoria!: string;
    public descripcion!: string;
    public estado!: string;

    static associate(models: any) {
      Categoria.hasMany(models.Libro, {
        foreignKey: "id_categoria",
        as: "libros",
      });
    }
  }

  Categoria.init(
    {
      id_categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      estado: {
        type: DataTypes.ENUM("Activo", "Inactivo"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Categoria",
      tableName: "Categoria",
      timestamps: false,
    }
  );

  return Categoria;
};

// models/Libro.ts
import { Sequelize, DataTypes, Model } from "sequelize";
import Autor from "./Autor";
import Categoria from "./Categoria";

class Libro extends Model {
  public id_libro!: string;
  public titulo!: string;
  public anio_publicacion!: string;
  public precio!: number;
  public stock!: number;
  public estado!: string;
  public id_categoria!: string;
  public id_autor!: string;
  public imagen!: string;
   // 🔧 Aquí defines las asociaciones directamente dentro de la clase
    static associate(models: any) {
      Libro.belongsTo(models.Autor, {
        foreignKey: "id_autor",
        as: "autor",
      });

      Libro.belongsTo(models.Categoria, {
        foreignKey: "id_categoria",
        as: "categoria",
      });
    }
}


export default (sequelize: Sequelize) => {
  Libro.init(
    {
      id_libro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      anio_publicacion: {
        type: DataTypes.STRING,
      },
      precio: {
        type: DataTypes.FLOAT,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      estado: {
        type: DataTypes.STRING,
      },
      imagen: {
        type: DataTypes.STRING,
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categoria", // nombre de la tabla
          key: "id_categoria",
        },
      },
      id_autor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Autor",
          key: "id_autor",
        },
      },
    },
    {
      sequelize,
      tableName: "Libro",
      modelName: "Libro",
      timestamps: true,
    }
  );

  

  return Libro;
};

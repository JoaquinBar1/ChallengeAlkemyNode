module.exports = (sequelize, dataTypes) => {
    let alias = "genero";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.VARCHAR(45),
            allowNull: false,
        },
        imagen: {
            type: dataTypes.BLOB,
            allowNull: false,
        },
        peliculas_asociadas: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    } 
    let config = {
        tableName: "generos",
        timestamps: false
    }

    let Generos = sequelize.define(alias, cols, config)
    

    return Generos;
}
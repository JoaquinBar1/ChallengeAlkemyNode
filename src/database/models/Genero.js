module.exports = (sequelize, dataTypes) => {
    let alias = "Genero";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        imagen: {
            type: dataTypes.BLOB,
        },
        peliculas_asociadas: {
            type: dataTypes.INTEGER,
        }

    } 
    let config = {
        tableName: "generos",
        timestamps: false
    }

    let Genero = sequelize.define(alias, cols, config)
    
    Genero.associate = function(models){
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genero_id"
        })
    }

    

    return Genero;
}
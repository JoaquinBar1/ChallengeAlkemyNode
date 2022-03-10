module.exports = (sequelize, dataTypes) => {
    let alias = "Pelicula";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.STRING,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        fecha_estreno: {
            type: dataTypes.DATEONLY,
        },
        rating: {
            type: dataTypes.DECIMAL(5,0),
        },
        genero_id: {
            type: dataTypes.INTEGER, 
        }
    }
    let config = {
        tableName: "peliculas",
        timestamps: false
    }

    let Pelicula = sequelize.define(alias, cols, config)

    Pelicula.associate = function(models){
        Pelicula.belongsTo(models.Genero,{
            as: "generos",
            foreignKey: "genero_id"
        })
        Pelicula.belongsToMany(models.Personaje, {
            as: "personajes",
            through: "personaje_pelicula",
            foreignKey: "pelicula_id",
            otherKey: "personaje_id",
            timestamps: false
        })
    }

    return Pelicula;
}

module.exports = (sequelize, dataTypes) => {
    let alias = "Pelicuala";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.VARCHAR(100),
            allowNull: false,
        },
        imagen: {
            type: dataTypes.BLOB,
        },
        fecha_estreno: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(5,0),
            allowNull: false
        },
        genre_id: {
            tpye: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "peliculas",
        timestamps: false
    }

    let Pelicula = sequelize.define(alias, cols, config)

    Pelicula.associate = (models) => {
        Pelicula.belongsTo(models.Genero,{
            as: "genre",
            foreignKey: "genre_id"
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

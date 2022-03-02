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

    return Pelicula;
}

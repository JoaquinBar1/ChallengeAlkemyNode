module.exports = function(sequelize, dataTypes){
    let alias = "Personaje";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        edad: {
            type: dataTypes.INTEGER,
            
        },
        peso: {
            type: dataTypes.INTEGER,       
        },
        historia: {
            type: dataTypes.STRING,
            
        },
        imagen: {
            type: dataTypes.BLOB,

        }
    }
    let config = {
        tableName: 'personajes',
        timestamps: false,
    }
    let Personaje = sequelize.define(alias, cols, config)
    
    Personaje.associate = function(models){
        Personaje.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "personaje_pelicula",
            foreignKey: "personaje_id",
            otherKey: "pelicula_id",
            timestamps: false
        })

    }

    return Personaje;
}



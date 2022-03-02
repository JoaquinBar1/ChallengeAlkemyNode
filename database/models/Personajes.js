module.exports = function(sequelize, dataTypes){
    let alias = "Personaje";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true,
        },
        nombre: {
            type: dataTypes.VARCHAR(45),
        },
        edad: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        peso: {
            type: dataTypes.INTEGER,       
        },
        historia: {
            type: dataTypes.VARCHAR(100),
            allowNull:false,
        },
        imagen: {
            type: dataTypes.BLOB,

        }
    }
    let config = {
        tableName: 'personajes',
        timestamps: false,
    }
    let Personajes = sequelize.define(alias, cols, config)

    return Personajes;
}



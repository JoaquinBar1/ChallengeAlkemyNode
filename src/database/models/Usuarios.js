module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
    }
    let Usuarios = sequelize.define(alias, cols, config)
    
    return Usuarios;
}


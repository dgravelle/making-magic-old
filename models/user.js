'use strict'

export default (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        id: DataTypes.UUID,
        username: DataTypes.STRING,
        email: DataTypes.STRING
    },
    {
        classMethods: {
            associate: (models) => {
                User.hasMany(models.deck);
            }
        }
    });

    return User;
}

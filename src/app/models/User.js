import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                modelName: 'user',
                timestamps: false,
                freezeTableName: true,
                underscored: false,
                tableName: 'user',
            }
        );
    }
}

export default User;

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            provider: {
                type: Sequelize.BOOLEAN,
                deafultValue: false,
            },
            create_at: {
                type: Sequelize.DATE,
            },
            update: {
                type: Sequelize.DATE,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('user');
    },
};

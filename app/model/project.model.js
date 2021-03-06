module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define('project', {
        title: {
            type: Sequelize.STRING
        },
        summary: {
            type: Sequelize.STRING
        },
        detail: {
            type: Sequelize.STRING
        },
        imgSrc: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING
        },
        uid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        }
    })
    return Project;
}
module.exports = (connection, Sequelize) => {
  const Meeting = connection.define('meetings', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    datetime: {
      type: Sequelize.DATE
    }
  }, {
    underscored: true
  })
  return Meeting
}
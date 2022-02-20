module.exports = (connection, sequelize) => {
  const Meeting = connection.define('meetings', {
    id: {
      type: sequelize.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: sequelize.STRING
    },
    description: {

    },
    datetime: {
      type: sequelize.DATE
    }
  }, {
    underscored: true
  })
  return Meeting
}
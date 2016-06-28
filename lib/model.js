/**
 * Session Model
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Session', {
    sid: {
      type: DataTypes.STRING(32),
      primaryKey: true
    }
    , userId: DataTypes.STRING(50)
    , expires: DataTypes.DATE
    , data: DataTypes.TEXT
  });
};

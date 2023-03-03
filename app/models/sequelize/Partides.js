module.exports = (sequelize, DataTypes) => {
  const Partides = sequelize.define(
    'Partides',
    {
      dau1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dau2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      guanya: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Partides;
};

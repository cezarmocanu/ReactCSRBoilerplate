module.exports = (connection, DT) => {
  connection.define(
    "Category",
    {
      name: {
        type: DT.STRING(128),
      },
      parent: {
        type: DT.INTEGER,
      },
    },
    { freezeTableName: true }
  );
};

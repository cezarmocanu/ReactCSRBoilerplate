module.exports = (connection, DT) => {
  connection.define(
    "Product",
    {
      code: {
        type: DT.STRING(10),
      },
      name: {
        type: DT.STRING(128),
      },
      price: {
        type: DT.REAL,
      },
      description: {
        type: DT.STRING(512),
      },
      category: {
        type: DT.INTEGER,
      },
    },
    { freezeTableName: true }
  );
};

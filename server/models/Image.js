module.exports = (connection, DT) => {
  connection.define(
    "Image",
    {
      name: {
        type: DT.STRING(64),
      },
      path: {
        type: DT.STRING(128),
      },
      gallery: {
        type: DT.INTEGER,
      },
    },
    { freezeTableName: true }
  );
};

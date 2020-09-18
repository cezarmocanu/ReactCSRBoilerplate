module.exports = (connection, DT) => {
  connection.define(
    "ImageGallery",
    {
      product: {
        type: DT.INTEGER,
      },
    },
    { freezeTableName: true }
  );
};

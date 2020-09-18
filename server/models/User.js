module.exports = (connection, DT) => {
  connection.define(
    "User",
    {
      email: {
        type: DT.STRING(64),
      },
      password: {
        type: DT.STRING(300),
      },
      role: {
        type: DT.STRING(20),
      },
    },
    { freezeTableName: true }
  );
};

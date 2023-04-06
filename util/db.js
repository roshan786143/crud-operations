const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("wallet", "root", "Hutech$Mysql", {
  host: "localhost",
  dialect: "mysql",
});

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("connection to the database established successfully");
//   } catch (err) {
//     console.log(err);
//     console.log("There's an error while connecting to the database");
//   }
// })();

module.exports = sequelize;
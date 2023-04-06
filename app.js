const express = require("express");

const app = express();

const cors = require("cors");

const dotenv = require("dotenv").config();

const db = require("./util/db");

const colors = require("colors");

const router = require("./routes/routes");

const User = require("./models/user");

const Wallet = require("./models/wallet");

const port = process.env.port || 8080;

app.use(
  cors({
    origin: "*",
  })
);

app.use(async (req, res, next) => {
  const user = await User.findByPk(1);
  req.user = user;
  next();
});

/*
1).establish the connection to the database
2).synchronise the models
3).call our apis
*/

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

User.hasOne(Wallet);
Wallet.belongsTo(User);

(async () => {
    console.log('Testing the database connection...'.bgBlue);
  try {
    await db.authenticate();
    console.log("connection to the database established successfully".bgCyan);
    await db.sync({ force: false });
    console.log("All models synchronised successfully".bgGreen);
    app.use("/api", router);
    app.listen(port, () => console.log(`hey your server has started`.bgYellow));
  } catch (err) {
    console.log(err);
    console.log("There's an error while connecting to the database");
  }
})();

// app.use("/api", router);

// (async()=>{
//     try{
//         await db.sync({force: false});
//         console.log('All models synchronised successfully'.bgGreen);
//         app.listen(port,()=>console.log(`hey your server has started`));
//     }catch(err){
//         console.log('There\'s an error while synchronising your models'.bgRed);
//     }
// })();

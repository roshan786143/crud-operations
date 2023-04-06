const router = require("express").Router();
const register = require("../controllers/register");
const getUsers = require("../controllers/getUsers");
const getOneUser = require("../controllers/getOneUser");
const addingMoney = require("../controllers/addingMoney");
const userMonthlySalary = require("../controllers/userMonthlySalary");

router.get("/getUsers", getUsers);

router.get("/getOneUser", getOneUser);

router.post("/register", register);

router.post("/addingMoney", addingMoney);

router.get("/userMonthlySalary", userMonthlySalary);

module.exports = router;

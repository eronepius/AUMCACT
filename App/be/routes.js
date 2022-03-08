const express =  require('express');
let router = express.Router();

//local imports
const createUser = require("./controller/createUser")
const filter = require("./controller/filter")
const deleteUser = require("./controller/deleteUser")
const updateUser = require("./controller/updateUser")

router.post("/createUser", createUser);
router.post("/filter", filter);
router.post("/deleteUser", deleteUser);
router.post("/updateUser", updateUser)


module.exports = router;
const express = require('express')
const routes = require("./routes")
const bodyparser = require("body-parser")


const app = express();
const port = 3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:true}))
app.use(routes);

app.listen(port)
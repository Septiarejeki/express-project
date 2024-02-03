const express = require("express");
const app = express();
const cors = require('cors')
const router = require ("./routes/index.js");
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(process.env.APP_PORT, function (){
    console.log(`server running on https://localhost:${process.env.APP_PORT}`);
});

module.exports = app;
require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8000;



app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);


app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})
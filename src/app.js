
const express = require("express");
require("./db/cont")                         // conection of mongoose to db require in main app
const MensRank = require("./modles/schem")     // import schema and model
const router = require("./router/rout")       //router import
const app = express();                     
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(router)


app.listen(port, () => {
    console.log(`sucessful port connected ${port}`);
})
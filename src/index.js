const express = require("express");
const app = express();
const path = require("path")
const {engine} = require("express-handlebars");
const routes = require("./routes");
const db = require("./database");
const port = 3333;


app.engine('.hbs',engine({extname: '.hbs'}));
app.use(express.urlencoded({extended: true}));
app.set('view engine','.hbs');
app.set("views", path.join(__dirname, "views"));
db.Connect();
routes(app);
app.listen(port, ()=>console.log(`localhost:${port}`));
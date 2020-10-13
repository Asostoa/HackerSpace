const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "code_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

// const htmlRoutes = require("./routes/htmlRoutes.js");
// const apiRoutes = require("./routes/apiRoutes.js");

// app.use(htmlRoutes);
// app.use(apiRoutes);



app.get("/profile", (req,res)=>{
    connection.query("SELECT * FROM userCode;", function(err, data) {
        if (err) {
          return res.status(500).end();
        }
    
        res.render("index", { code: data });
    });
})

app.post("/api/code",(req, res) =>{
    connection.query("INSERT INTO userCode (title, code, description) VALUES (?,?,?)", [req.body.title, req.body.code, req.body.description], function(err, result) {
        if (err) {
        return res.status(500).end();
        }
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
        console.log("complete");
    });
});

app.delete("/api/code/:id", (req,res)=>{
    connection.query("DELETE FROM userCode WHERE id = ?",[req.params.id],(err,data)=>{
        if (err){
            return res.status(500).end();
        } else if (data.affectedRows === 0){
            return res.status(404).end();
        }
        console.log("User Code Deleted! Id: "+req.params.id)
        res.status(200).end();
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
const apiRoutes = {}

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

module.export = {
    
};
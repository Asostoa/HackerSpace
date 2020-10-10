// Dependencies
const express = require('express');
const app = express();
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true})); // include these for POST requests
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT,() => {
    console.log('This server is listening on ' + PORT)
});
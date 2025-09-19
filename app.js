const express = require("express"); 
const app = express(); 

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");

});

const PORT = 8080; 
app.listen(PORT, () => {
    console.log("Connected to server on port:", PORT)
});
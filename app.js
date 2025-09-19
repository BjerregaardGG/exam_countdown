const express = require("express"); 
const app = express(); 

const eksamensDato = new Date("2026-01-12T14:30:45"); 
const date = new Date(); 
const dateAndTime = date.toLocaleString("da-DK"); 

const diffMs = eksamensDato - date; 

// 2. Convert til andre enheder
const diffSeconds = diffMs / 1000;                    // 94500 sekunder
const diffMinutes = diffMs / (1000 * 60);             // 1575 minutter  
const diffHours = diffMs / (1000 * 60 * 60);          // 26.25 timer
const diffDays = diffMs / (1000 * 60 * 60 * 24);      // 1.09 dage

console.log(`Forskel: ${diffDays.toFixed(1)} dage`);

console.log(dateAndTime); 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
    
});


app.get("/age_calculator", (req,res) => {

});


const PORT = 8080; 
app.listen(PORT, () => {
    console.log("Connected to server on port:", PORT)
});
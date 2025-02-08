const express = require("express");
const app = express();
const port = 3000;

// Statische Dateien (HTML, CSS, JS) bereitstellen
app.use(express.static("public"));

// Standard-Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`🚀 Server läuft auf http://localhost:${port}`);
});

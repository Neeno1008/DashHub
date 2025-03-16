const express = require("express");
const app = express();
const port = 3110;

// 📌 Statische Dateien bereitstellen (HTML, CSS, JS)
app.use(express.static("public"));

// 📌 Middleware zum Verarbeiten von Formulardaten
app.use(express.urlencoded({ extended: true }));

// Standard-Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// 📌 Route zum Empfangen des Formulars
app.post("/submit-form", (req, res) => {
    const { name, message } = req.body;
    console.log(`Neue Nachricht von ${name}: ${message}`);
    res.sendFile(__dirname + "/public/submit_Message.html");
});

// 📌 Server starten
app.listen(port, () => {
    console.log(`🚀 Server läuft auf http://localhost:${port}`);
});


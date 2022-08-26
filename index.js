const express = require("express")
const port = 3000;
const app = express()

app.use(express.static(__dirname));
app.listen(port, (req, resp) => (console.log("Your server started at port No:" + " " + port)))

app.get("/", (req, resp) => (resp.sendFile(__dirname + "/public/index.html")))

app.get("/game", (req, resp) => (resp.sendFile(__dirname + "/public/game.html")))
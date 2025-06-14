// Instagram Page With EJS

const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]; // Find data for the given username

    if (data) {
        res.render("instagram", { data }); // Render instagram.ejs with data
    } else {
        res.render("error"); // Render error.ejs if no data found
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


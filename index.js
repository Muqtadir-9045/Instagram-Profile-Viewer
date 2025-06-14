// Instagram Page With EJS

const express = require("express");
const app = express();

// const port = 8080;
const port = process.env.PORT || 8080;

//Serving Static Files
//app.use(express.static("public/js"));
//app.use(express.static("public/css"));

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






// INTERPOLATION SYNTAX

// const express = require("express");
// const app = express();

// const port = 8080;

// app.set("view engine" , "ejs");

// app.get("/" , (req , res) => {
//     res.render("home.ejs");
// });

// app.listen(port , () => {
//     console.log(`listening on port${port}`);
// });









// PASSING DATA TO EJS 

// const express = require("express");
// const app = express();

// const port = 8080;

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.get("/hello", (req, res) => {
//     res.send("Hello Page");
// });

// app.get("/rolldice", (req, res) => {
//     let diceVal = Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice", { num: diceVal });
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });




// Instagram EJS With Loops

// const express = require("express");
// const app = express();
// const port = 8080;

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.get("/ig/:username", (req, res) => {
//     const followers = ["Tony", "Bruce", "Steve", "Peter", "Natasha"];
//     const { username } = req.params;
//     res.render("instagram", { username, followers });
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });








 



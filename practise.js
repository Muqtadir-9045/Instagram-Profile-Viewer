const express = require("express");
const app = express();

const port = 8080;

app.set("view engine" , "ejs");

app.get("/ig/:username" , (req,res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];

    if(data) {
        res.render("practise" , { data });
    } else {
        res.render("error");
    }
});

app.listen(port , () => {
    console.log(`listening on port ${port}`);
})
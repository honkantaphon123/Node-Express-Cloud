const express = require("express");
const app = express();
const port = process.env.PORT ;

app.get("/", (req, res) => {
    res.send("Hellojjj World!");
});

app.listen(port, () => {
    console.log(Example app Listening at http://localhost:${port});
});

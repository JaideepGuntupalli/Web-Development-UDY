const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!");
//     res.send("We got your request! This is the response");
// });

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Welcome to ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:filter", (req, res) => {
    const { subreddit, filter } = req.params;
    res.send(`<h1>You are at the ${subreddit} subreddit</h1>
    <h2>And You are watching ${filter} posts</h2>`);
});

app.get("/cats", (req, res) => {
    console.log("We got a new request!");
    res.send("We got your request! This is the response");
});

app.get("/dogs", (req, res) => {
    console.log("We got a new request!");
    res.send("<h1>We got your request! This is the response</h1>");
});

app.get("*", (req, res) => {
    console.log("We got a new request!");
    res.send("404 Not found");
});

app.listen(3000, () => console.log("Listening on port 3000"));

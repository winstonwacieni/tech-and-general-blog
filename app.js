const express = require("express");
const app = express();
const { config, engine } = require("express-edge");
//  ----setup ----

const { showHomePage } = require("./controllers/PostController");

//end controllers

app.use(express.static("public"));

app.use(engine);
app.set("views", `${__dirname}/views`);

// first route

app.get("/", showHomePage);

// server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

// task - to connect db and views

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello from Node API");
});

mongoose.connect("mongodb+srv://admin:pPX9vib3SSach7Qu@backenddb.nge1dt6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
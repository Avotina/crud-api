const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get("/", (req, res) => {
    res.send("Hello from Node API");
}); 


app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
});


app.post('/api/products', async (req, res) => {
    try {
      const  product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
});


mongoose.connect("mongodb+srv://admin:pPX9vib3SSach7Qu@backenddb.nge1dt6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
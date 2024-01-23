const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const products = require("./data/products");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("GADGETSTORE SERVER IS RUNNING");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});
app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find((p) => p._id === req.params.id);
  res.send(singleProduct);
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

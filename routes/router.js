import express from "express";
import { getProducts, addProducts } from "../queries/queries.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/products", async (req, res) => {
  try {
    const products = await getProducts();
    res.send(products);
  } catch (error) {
    console.log(error);
  }
});

router.post("/products", async (req, res) => {
  try {
    const { type, size} = req.body
    await addProducts(type, size)
    res.send('Product Agregado')
  } catch (error) {
    console.log(error.message);
  }
});

router.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

export default router;

import express from "express";
import { Product } from "../entities/Product";
import { AppDataSource } from "../data-source";

const router = express.Router();

// Route to get all products
router.get("/products", async (req, res) => {
    try {
        const products = await AppDataSource.manager.find(Product);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Purchase product
router.post('/purchaseProduct/:productId', async (req, res) => {
    try {
      const product = await AppDataSource.manager.findOne(Product, {
         where: { id: parseInt(req.params.productId) }
        })
  
      if (product) {
        if (product.stock > 0) {
          product.stock -= 1
          await AppDataSource.manager.save(product)
          res.json(product)
        } else {
          res.status(422).json({ error: 'Product out of stock' })
        }
      } else {
        res.status(404).json({ error: 'Product not found' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })

export default router;

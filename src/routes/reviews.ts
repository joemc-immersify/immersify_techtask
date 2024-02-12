import express, { Request, Response } from 'express'
import { Review } from '../entities/Review'
import { Product } from '../entities/Product'
import { Customer } from '../entities/Customer'
import { AppDataSource } from '../data-source'

const router = express.Router()

// Route to add a new review
router.post('/reviews', async (req: Request, res: Response) => {
  try {
    const { productId, customerId, review, rating } = req.body

    if (typeof review !== 'string')
      return res.status(400).json({ error: 'Review text is missing or invalid.' })

    if (typeof rating !== 'string' || /^[1-5]$/.test(rating))
      return res.status(400).json({error: 'Invalid rating. Must be a whole number between 1 and 5.'});

    const product = await AppDataSource.manager.findOne(Product, { where: { id: parseInt(productId) }})
    const customer = await AppDataSource.manager.findOne(Customer, { where: { id: parseInt(customerId) }})

    if (product && customer) {
      const savedReview = await AppDataSource.manager
        .save(new Review(
          product,
          customer,
          review,
          parseInt(rating)
        ))

      res.json(savedReview)
    } else {
      res.status(404).json({ error: 'Product or customer not found' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
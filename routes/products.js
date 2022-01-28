import express from 'express';
const router = express.Router();
import { getAllProducts, getMeals, getDrinks } from '../models/products.js';

// GET ALL USERS
router.get(`/`, async function (req, res) {
  const result = await getAllProducts();
  res.json(result);
});

router.get(`/meals`, async function (req, res) {
  const result = await getMeals();
  res.json(result);
});

router.get(`/drinks`, async function (req, res) {
  const result = await getDrinks();
  res.json(result);
});

export default router;

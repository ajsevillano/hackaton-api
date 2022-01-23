import express from 'express';
const router = express.Router();
import { getAllUsers } from '../models/users.js';

// GET ALL USERS
router.get(`/`, async function (req, res) {
  const result = await getAllUsers();
  res.json(result);
});

export default router;

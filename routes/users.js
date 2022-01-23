import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ success: true, payload: 'Users section' });
});

export default router;

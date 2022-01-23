import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    success: true,
    token:
      '#")iH/c9GSKw"*^VvGeBM6n_6.]|W="7%c|"5lN@j<.F[/3HZ.qYfS{r-!u2V~dsadfasdf',
  });
});

export default router;

// routes/index.js
import express from 'express';
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mis Compras' });
});
export default router;


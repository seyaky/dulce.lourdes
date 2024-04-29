var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('products/admin');
});

const productoController = require("../controller/productosController");

/*** GET ALL PRODUCTS ***/
router.get("/", productoController.list);

/*** CREATE ONE PRODUCT ***/ 
router.get("/create", productoController.create);
router.post("/create", productoController.stock);


module.exports = router;
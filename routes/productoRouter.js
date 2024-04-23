const express = require('express');
const router = require("express").Router();
const productoController = require("../controller/productosController");

/*** GET ALL PRODUCTS ***/
router.get("/", productoController.list);

/*** CREATE ONE PRODUCT ***/ 
router.get("/create", productoController.create);
router.post("/create", productoController.stock);


module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
    isContacto: true,
  });
}); 

router.post('/', async(req,res,next) =>)


module.exports = router;
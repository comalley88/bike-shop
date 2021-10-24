var express = require('express');
var router = express.Router();

/* GET home page. */

var dataBike = [
  {
    nom: 'BIKO45',
    url: '/images/bike-1.jpg',
    prix: 679
  },
  {
    nom: 'ZOOK7',
    url: '/images/bike-2.jpg',
    prix: 799
  },
  {
    nom: 'LIKO89',
    url: '/images/bike-3.jpg',
    prix: 839
  },
  {
    nom: 'GEW08',
    url: '/images/bike-4.jpg',
    prix: 1249
  },
  {
    nom: 'KIWIT',
    url: '/images/bike-5.jpg',
    prix: 899
  },
  {
    nom: 'NASAY',
    url: '/images/bike-6.jpg',
    prix: 1399
  }

]


router.get('/', function(req, res) {
  if (req.session.dataCardBike === undefined) {
    req.session.dataCardBike = []
  }
  

  res.render('index', {dataBike: dataBike});
});

router.get('/shop', function(req,res) {

  var inBasket = false 
  for (var i=0; i<req.session.dataCardBike.length; i++) {
    if (req.session.dataCardBike[i].nom === req.query.nom) {
      req.session.dataCardBike[i].quantity++;
      inBasket = true
    }}
  if (inBasket === false) {req.session.dataCardBike.push({nom: req.query.nom,
    url: req.query.url,
    prix: req.query.prix,
    quantity: 1})}
 
  res.render('shop', {dataCardBike: req.session.dataCardBike})
})


router.get('/delete-shop', function(req,res) {

  for (var i=0; i<req.session.dataCardBike.length; i++) {
    if (req.session.dataCardBike[i].nom === req.query.nom) {
      req.session.dataCardBike.splice(req.session.dataCardBike[i], 1)
    }
  }
  res.render('shop', {dataCardBike: req.session.dataCardBike})
})

router.post('/update-shop', function(req,res) {

  var newQuantity = req.body.quantity
  req.session.dataCardBike[req.body.position].quantity = newQuantity;
  res.render('shop', {dataCardBike: req.session.dataCardBike})
})

module.exports = router;

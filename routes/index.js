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
  console.log(req.query)
  res.render('index', {dataBike});
});

var dataCardBike = [];

router.get('/shop', function(req,res) {
  console.log(req.query)
  console.log(dataCardBike)
  dataCardBike.push({nom: req.query.nom,
      url: req.query.url,
      prix: req.query.prix,
      quantity: 1})
 
  res.render('shop', {dataCardBike})
})


router.get('/delete-shop', function(req,res) {
  console.log(req.query)
  for (var i=0; i<dataCardBike.length; i++) {
    if (dataCardBike[i].nom === req.query.nom) {
      dataCardBike.splice(dataCardBike[i], 1)
    }
  }
  res.render('shop', {dataCardBike})
})

router.post('/update-shop', function(req,res) {
  console.log(req.body)
  var newQuantity = req.body.quantity
  dataCardBike[req.body.position].quantity = newQuantity;
  res.render('shop', {dataCardBike})
})

module.exports = router;

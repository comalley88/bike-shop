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

var dataCardBike = [
  {
    nom: 'BIKO45',
    url: '/images/bike-1.jpg',
    prix: 679,
    quantity: 1
  },
  {
    nom: 'ZOOK7',
    url: '/images/bike-2.jpg',
    prix: 799,
    quantity: 1
  },
  {
    nom: 'LIKO89',
    url: '/images/bike-3.jpg',
    prix: 839,
    quantity: 1
  },
  {
    nom: 'GEW08',
    url: '/images/bike-4.jpg',
    prix: 1249,
    quantity: 1
  },
  {
    nom: 'KIWIT',
    url: '/images/bike-5.jpg',
    prix: 899,
    quantity: 1
  },
  {
    nom: 'NASAY',
    url: '/images/bike-6.jpg',
    prix: 1399,
    quantity: 1
  }
]

router.get('/shop', function(req,res) {
  console.log(req.query)
  res.render('shop', {dataCardBike})
})

module.exports = router;

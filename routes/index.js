const
  express = require('express'),
  router = express.Router(),
  tweetBank = require('../tweetBank');

router.get('/', function(req, res, next){
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
});

router.use(express.static('public'));

module.exports = router;
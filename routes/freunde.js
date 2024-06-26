var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:account', async function(req, res, next) {  
  var freund = req.app.get('database').getFreund(req.params.account)
  if (!freund) {
    return res.status(404).render('error', {error: {}});
  }

  var statistik = await req.app.get('fortniteapi').getStatistik(req.params.account);

  res.render('freund', {
    freund: freund,
    statistik: statistik
  })
});

module.exports = router;

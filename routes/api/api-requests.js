const router = require('express').Router();
const apiCtrl = require('../../controllers/api-requests')

router.get('/countries', apiCtrl.countryInfo);


module.exports = router;
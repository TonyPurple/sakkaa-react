const express = require('express');
const router = express.Router();
const playersCtrl = require('../../controllers/players');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../../config/auth"));
router.post('/players', checkAuth, playersCtrl.search)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/profiles');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../../config/auth"));
router.get("/", checkAuth, profilesCtrl.index);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
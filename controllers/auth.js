const User = require('../models/user');
// const Profile = require('../models/profile')
const jwt = require("jsonwebtoken")

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
    // const profile = new Profile(req.body)
    // req.body.profile = profile._id
    const user = new User(req.body)
    try {
      await user.save();
      // await profile.save();
  
      const token = createJWT(user)
      res.json({ token })
    
    } catch (err) {
      res.status(400).send({ err: err.errmsg })
    }
  }

async function login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) return res.status(401).json({ err: 'User not found'})
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user)
          res.json({ token })
        } else {
          return res.status(401).json({ err: 'Incorrect password' })
        }
      })
    }
    catch (err) {
      return res.status(400).json(err)
    }
  }

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
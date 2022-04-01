// const Profile = require("../models/profile");
// const User = require("../models/user")

// module.exports = {
//   index,
//   show,
//   update,
//   editProfile,
//   userProfile
// };

// function index(req, res) {
//   Profile.find({})
//   .then(profiles => res.json(profiles))
//   .catch(err => {
//     console.log(err)
//     res.status(500).json(err)
//   })
// }

// function userProfile(req, res) {
//   Profile.findById(req.user.profile)
//   .then(profile => {
//     res.json(profile)
//   })
// }

// function show(req, res) {
//     Profile.findById(req.params._id)
//       .then(profile => {
//             res.json(profile)
//           })
//       }

// function update(req, res) {
//         Profile.findByIdAndUpdate(req.params._id, req.body, {new: true})
//         .then(profile => {
//           res.json(profile)
//         })
//       }

// function editProfile(req, res) {
//         Profile.findById(req.params.id)
//         .then(profile => {
//           res.json(profile)
//         })
//       }
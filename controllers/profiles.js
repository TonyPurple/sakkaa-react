const Profile = require("../models/profile");

module.exports = {
  index,
};

function index(req, res) {
    Profile.find({}).then((profiles) => res.json(profiles))
    };
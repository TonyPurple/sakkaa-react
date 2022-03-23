const PlayerModel = require('../models/player.js');
const axios = require('axios');
const BASE_URL = 'https://v3.football.api-sports.io'

function search(req, res) {
    axios.get(`${BASE_URL}/players/seasons`,
      {
        params: { search: req.body.search, league: 39 },
        headers: {
          'x-apisports-key': process.env.API_KEY
        }
      })
      .then(response => {
        res.json(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  module.exports = {
    search,
  }

const axios = require('axios');

module.exports = {
    countryInfo
}


function countryInfo(req, res) {
    axios.fetch("https://v3.football.api-sports.io/countries", {
        "method": "GET",
        "headers": {
            "x-apisports-key": process.env.API_KEY
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })}
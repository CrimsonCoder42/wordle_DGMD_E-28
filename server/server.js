const express = require("express")
const cors = require("cors")
const path = require('path');
const axios = require("axios").default
require('dotenv').config()
const PORT = 2020
const app = express()
app.use(cors())

app.get('/wordList', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '1', wordLength: '5'},
        headers: {
          'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.MY_API_KEY
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data)
          res.json(response.data);
      }).catch(function (error) {
          console.error(error);
      });

})


app.get('/', function(req, res) {
  res.render(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
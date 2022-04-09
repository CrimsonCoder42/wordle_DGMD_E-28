const express = require("express")
const cors = require("cors")
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



const options = {
  method: 'GET',
  url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
  params: {count: '6', wordLength: '5'},
  headers: {
    'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
    'X-RapidAPI-Key': '1c003b8174msh74203ba7910c136p111ec9jsnb7d3d36a35c5'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


app.get('/verify', (req, res) => {
    console.log(req)

    const word = req.query.word

    const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: {entry: word},
        headers: {
          'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.MY_API_KEY
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
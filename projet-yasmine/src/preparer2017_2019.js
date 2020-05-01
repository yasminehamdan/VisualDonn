import bb from 'billboard.js'
// importer `etranger_2017_2019.json'
const data = require('./data/etranger_2017_2019.json')

// on a besoin des données "value":[560601,567756,576148]} 
const resultat = data
  .map(d => ({
    année: ['2017','2018','2019'],
    étranger: d['values'],
  }))

  // transformer en chaine de charactères et passer le tout à la console
console.log(
  JSON.stringify(resultat)
)
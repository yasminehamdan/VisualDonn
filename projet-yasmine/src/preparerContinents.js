import bb from 'billboard.js'
// importer `tout.json`
const data = require('./data/tout.json')


// une fonction qui prends un objet est dit s'il s'agit d'un continent
// les pays commencent par `-`
const estUnContinent = d => d['Pays de résidence'].startsWith('-')

// sortir le nom du pays
// un continent est sous la forme `- Océanie`
// dans ce cas nous ne voulons que la partie `Océanie`
const nettoyerContinent = continent => continent.split(' ')[1]

const resultat = data
  // ne prenons que les objets qui représentent un continent
  .filter(estUnContinent)
  // garder juste le nom du pays et le nombre de suisses
  .map(d => ({
    continent: nettoyerContinent(d['Pays de résidence']),
    suisses: d[`Sexe - total Classe d'âge - total`],
  }))

// transformer en chaine de charactères et passer le tout à la console
console.log(
  JSON.stringify(resultat)
)





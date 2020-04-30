import bb from 'billboard.js'

// importer `tout.json`
const data = require('../data/tout.json')

// une fonction qui prends un objet est dit s'il s'agit d'un pays
// les pays commencent par `>>`
const estUnPays = d => d['Pays de résidence'].startsWith('>>')

// sortir le nom du pays
// un pays est sous la forme `>> 8343 Zambie`
// dans ce cas nous ne voulons que la partie `Zambie`
const nettoyerPays = pays => pays.split(' ')[2]

const resultat = data
  // ne prenons que les objets qui représentent un pays
  .filter(estUnPays)
  // garder juste le nom du pays et le nombre de suisses
  .map(d => ({
    pays: nettoyerPays(d['Pays de résidence']),
    suisses: d[`Sexe - total Classe d'âge - total`],
  }))
  // ordonner par nombre de suisse, le pays avec le plus de suisses est en premier
  .sort((a, b) => a.suisses > b.suisses ? -1  : 1)
  // ne prendre que les 25 premiers
  .filter((d, i) => i < 25)

// transformer en chaine de charactères et passer le tout à la console
console.log(
  JSON.stringify(resultat)
)


bb.generate({
  data: {
    json: {
      population: resultat.map(({ suisses }) => suisses),
    },
    type: 'bar',
  },
  axis: {
    x: {
      type: 'category',
      categories: resultat.map(({ pays }) => pays),
    }
  },
  bindto: document.getElementById('graphique')
})
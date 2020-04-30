const fs = require('fs')
const fichier = fs.readFileSync('tout.csv', 'utf-8')

const cleanLine = line =>
  line
    // prends une ligne du csv et la divise par `;`
    .split(';')
    // enlève les `"` autour des valeurs (par exemple `">> 8343 Zambie"` devient `>> 8343 Zambie`)
    .map(txt => Array.from(txt).filter(d => d !== '"').join(''))

// séparer le fichier en lignes
// `head` est la première, celle où il y a les noms de colonnes
// `lines` sont toutes les autres lignes
// à chaque ligne nous passons la fonction `cleanLine`
const [head, ...lines] = fichier.split('\n').map(cleanLine) 

// cette fonction prends `head`, les noms de colonnes
// et une ligne `line`
// elle retourne un objet json
// pour chaque nom de colonne une clé de est crée dans le json avec la partie correspondante de la ligne
// les valeurs numériques sont transformées en nombre
const addKeys = head => line =>
  head.reduce((result, key, index) => ({
    ...result,
    [key]: index > 2 ? Number(line[index]) : line[index],
  }), {})

// appliquer `addKeys` à toutes les lignes
// transformer le json en chaine de charactères avec `JSON.stringify`
// envoyer le tout à la console avec `console.log`
console.log(
  JSON.stringify(
    lines.map(addKeys(head))
  )
)


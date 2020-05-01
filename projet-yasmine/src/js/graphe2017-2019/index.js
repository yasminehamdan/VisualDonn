
// Packaged build with d3
import bb from 'billboard.js'
import data from '../../../data/2017_2019.json'
// base css
// import "billboard.js/dist/theme/insight.css";

let année = data.map(d => d.année)
let etranger= data.map(d => d.etranger)


export default function () {
  let chart = bb.generate({
  data: {
    // une ligne avec le titre et les valeurs pour l'axe y
    columns: [['Suisses de l\'étranger', ...etranger]]
  },
  axis: {
    // mettre les années comme cateégorie sur l'axe x
    x: {
      type: 'category',
      categories: année,
    }
  },
  bindto: "#entranger-graphique"
});
}


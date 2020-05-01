
// Packaged build with d3
import bb from 'billboard.js'
import data from '../../../data/2017_2019.json'
// base css
// import "billboard.js/dist/theme/insight.css";

let année = data.map(d => d.année)
let etranger= data.map(d => d.etranger)


export default function () {

  let tab = []

  année.forEach((année, key) => {
     tab.push([année, etranger[key]])
  });
  
  console.log(tab)

  let chart = bb.generate({
  data: {
    columns:tab
      //
      //HELP : je ne comprends pas comment mettre les années sur l'axe des abscisses
  },
  bindto: "#entranger-graphique"
});
}


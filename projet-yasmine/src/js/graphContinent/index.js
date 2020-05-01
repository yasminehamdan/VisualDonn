import bb from 'billboard.js'
import data from '../../../data/continents.json'
// base css
// import "billboard.js/dist/theme/insight.css";

let suisses = data.map(d => d.suisses)
let continent= data.map(d => d.continent)

export default function () {

  let tab = []

  continent.forEach((continent, key) => {
     tab.push([continent, suisses[key]])
  });
  
  console.log(tab)

  let chart = bb.generate({
    data: {
      columns: tab,
      type: 'pie',
      onover: function(d, i) {
        console.log("onover", d, i);
         },
      onout: function(d, i) {
        console.log("onout", d, i);
      }},
    axis: {
        x: {
          type: 'category',
          categories: tab.map(({ continent }) => continent),
        },
    },
     bindto: "#continent-graphique"
    });
}
  
import bb from 'billboard.js'
import data from '../../../data/25pays.json'

let colonnes = data.map(d => d.suisses)
let pays= data.map(d => d.pays)


export default function() {
  let tab = []

  pays.forEach((pays, key) => {
     tab.push([pays, colonnes[key]])
  });
  console.log(tab)
  let chart = bb.generate({
    data: {
      columns: tab,
      type: "bar"
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    bindto: "#nationalities-graphique"
  });

}
import bb from 'billboard.js'
import data from '../../../data/25pays.json'
 
let colones = data.map(d => d.suisses)
let pays = data.map(d => d.pays)
console.log(colones)
export default function() {
 
  let chart = bb.generate({
    data: {
      columns: [
    colones
      ],
      type: "bar"
    },
    bar: {
      width: {
        ratio: 0.5
      },
    },
    bindto: "#nationalities-graphique"
  });
 
}
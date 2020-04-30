import bb from 'billboard.js'
// base css
import "billboard.js/dist/theme/insight.css";


var chart = bb.generate({
    data: {
        json: {
            population: resultat.map(({ suisses }) => suisses),
          },
        x: "x",
        columns: [
        ["x", "2017", "2018", "2020"],
        ["data2", 130, 340, 200]
        ],
        type: {
          data1: "area-line-range"
        }
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y",
          }
        }
      },
    bindto: document.getElementById('graphique')
  });
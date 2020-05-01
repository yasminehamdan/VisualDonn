// base css
import "billboard.js/dist/theme/insight.css";
// Packaged build with d3
import bb from "billboard.js/dist/billboard.pkgd";

var chart = bb.generate({
  data: {
    columns: [
	["data1", 30, 200, 100, 400, 150, 250],
    ]
  },
  bindto: "#lineChart"
});

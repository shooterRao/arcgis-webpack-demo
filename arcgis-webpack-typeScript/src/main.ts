import Map = require("esri/map");
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");
import dom = require("dojo/dom");
import on = require("dojo/on");

const URL = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer';

const map = new Map(
  "baseMap",
  {
    logo: false,
    basemap: "topo",
    center: [-122.45, 37.75],
    zoom: 13
  }
)

// OK
console.log(dom);
console.log(on);

<template>
  <div id="baseMap">
    
  </div>
</template>

<script>
import esriMap from "esri/map";
import ArcGISTiledMapServiceLayer from "esri/layers/ArcGISTiledMapServiceLayer";
import ArcGISDynamicMapServiceLayer from "esri/layers/ArcGISDynamicMapServiceLayer";
import SimpleMarkerSymbol from "esri/symbols/SimpleMarkerSymbol";
import Graphic from  "esri/graphic";

const demoTileUrl1 =
  "http://192.168.1.39:6080/arcgis/rest/services/DemoYX2008/MapServer";
const demoTileUrl2 =
  "http://192.168.1.39:6080/arcgis/rest/services/DemoBJ/MapServer";

const bubblePath =
  "M112.383743,306.206395 C205.990914,190.501802 240.139288,110.391573 214.974178,65.98601 C191.75978,25.0226106 152.205437,0.518809731 112.001211,0.890603622 C72.6760715,1.25426804 33.6638005,25.2983572 8.95967556,65.9989251 C-17.1771425,109.059885 17.2454444,189.168363 112.383743,306.206395 Z";
const initColor = "#0084ff";

export default {
  name: "Map",
  mounted() {
    const map = new esriMap("baseMap", {
      logo: false,
      // basemap: "topo",
      // center: [-122.45, 37.75],
      // zoom: 13
    });
    
    //  const staticLayer1 = new ArcGISTiledMapServiceLayer(demoTileUrl1);
    //  map.addLayer(staticLayer1);
    const staticLayer2 = new ArcGISTiledMapServiceLayer(demoTileUrl2);
    map.addLayer(staticLayer2);

    // 加气泡
    let bubbleSymbol = this.createMarkerSymbol(bubblePath, initColor);
    map.onClick = (evt) => {
      let pt = evt.mapPoint;
      let bubbleGrahic = new Graphic(pt, bubbleSymbol);
      map.graphics.add(bubbleGrahic);
    }
    
  },
  methods: {
    createMarkerSymbol(path, color) {
      let markerSymbol = new SimpleMarkerSymbol();
      markerSymbol.setPath(path);
      markerSymbol.setColor(new dojo.Color(color));
      markerSymbol.setSize(24);
      markerSymbol.setOutline(null);
      return markerSymbol;
    }
  }
};
</script>

<style lang="less">
#baseMap {
  box-sizing: border-box;
  // padding: 100px;
  width: 100%;
  height: calc(100% - 100px);
}
</style>




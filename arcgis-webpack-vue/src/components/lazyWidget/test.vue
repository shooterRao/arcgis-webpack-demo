<template>
  <div class="lazy">
    这是懒加载的widget...
    <div id="lazy-map">

    </div>
  </div>

</template>

<script>
import esriMap from "esri/map";
import ArcGISTiledMapServiceLayer from "esri/layers/ArcGISTiledMapServiceLayer";
const demoTileUrl = "http://192.168.1.39:6080/arcgis/rest/services/DemoYX2008/MapServer";
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.map = new esriMap("lazy-map", {
      logo: false
    });
    this.staticLayer = new ArcGISTiledMapServiceLayer(demoTileUrl);
    this.map.addLayer(this.staticLayer);
  }
}
</script>

<style lang="less">
.lazy {
  width: 100%;
  height: 100%;
  font-size: 18px;
  #lazy-map {
    height: 90%;
    width: 100%;
  }
}
</style>



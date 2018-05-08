/* 
  A test
*/
import Map  from "esri/map";
import ArcGISTiledMapServiceLayer from "esri/layers/ArcGISTiledMapServiceLayer";
import ArcGISDynamicMapServiceLayer from "esri/layers/ArcGISDynamicMapServiceLayer";
import InfoTemplate from "esri/InfoTemplate";
import FeatureLayer from "esri/layers/FeatureLayer";

// 测试加载dojo
import dom from "dojo/dom";

// 测试用的广州地图服务,这里可以换成其他的
const gzStatic = "http://172.16.45.70/arcgis/rest/services/%E6%94%BF%E5%8A%A1%E7%94%B5%E5%AD%90%E5%9C%B0%E5%9B%BE/MapServer"
const gzDynamic = "http://10.194.148.22:6080/arcgis/rest/services/%E5%8E%9F%E4%B8%89%E8%A7%84%E5%90%88%E4%B8%80%E6%9C%8D%E5%8A%A1/%E4%B8%AD%E5%BF%83%E5%9F%8E%E5%8C%BA%E7%94%A8%E5%9C%B0%E8%A7%84%E5%88%92/MapServer";

const map = new Map(
  "baseMap",
  {
    logo: false
  }
)

const staticLayer = new ArcGISTiledMapServiceLayer(gzStatic);
const dynamicLayer = new ArcGISDynamicMapServiceLayer(gzDynamic);

const infoTemplate = new InfoTemplate("所有属性", "${*}");

  // 要素config
const featureLayerConfig = {
    mode: FeatureLayer.MODE_ONDEMAND,
    infoTemplate: infoTemplate,
    outFields: ["*"]
};

const featureSLayer = new FeatureLayer(gzStatic+"/0", featureLayerConfig);


map.addLayer(staticLayer);
map.addLayer(dynamicLayer);
map.addLayer(featureSLayer);

console.log(dom);
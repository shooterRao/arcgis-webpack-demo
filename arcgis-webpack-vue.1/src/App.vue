<template>
  <div id="app">
    <Header/>
    <BaseMap/>
    <toolBar/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BaseMap from "@/components/Map";
import toolBar from "@/components/toolBar";

export default {
  name: 'app',
  components: {
    BaseMap,
    Header,
    toolBar
  }
}
</script>


<style lang="less">
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>



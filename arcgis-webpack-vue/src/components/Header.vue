<template>
<div class="header">
  {{title}}
</div>  
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title : 'arcgis-webpack-vue'
    }
  }
}
</script>

<style lang="less">
.header {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background: rgb(61, 125, 219);
  font-size: 30px;
  color: aliceblue
}
</style>


<template>
  <div class="panel-wrapper">
    <lazy-test-widget/>
  </div>
</template>

<script>
export default {
  name: 'panel',
  components: {
    lazyTestWidget: () => import(/* webpackChunkName: 'lazy-test' */'@/components/lazyWidget/test.vue')
  }
}
</script>

<style lang="less">
.panel-wrapper {
  height: 500px;
  width: 600px;
  position: fixed;
  top: 185px;
  border: 1px solid black;
}
</style>

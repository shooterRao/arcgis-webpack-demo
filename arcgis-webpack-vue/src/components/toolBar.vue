<template>
  <div class="toolWidget">
    <button class="btn" @click="asyncLoadWidget">测试懒加载组件</button>
    <panel v-if="showComp"/>
  </div>
</template>

<script>
export default {
  name: 'toolWidget',
  data() {
    return {
      showComp: false
    }
  },
  components: {
    // 懒加载
    // 用注释形式添加注释名
    panel: () => import(/* webpackChunkName: 'Panel' */'./Panel.vue')
  },
  methods: {
    asyncLoadWidget() {
      this.showComp = true;
    }
  }
}
</script>

<style lang="less">
.toolWidget {
  height: 50px;
  width: 600px;
  line-height: 50px;
  border: 1px solid rgba(163, 157, 157, 0.87);
  position: fixed;
  top: 130px;
  right: 30px;
  .btn {
    color: #fff;
    background-color: #0084ff;
    padding: 7px 14px;
    line-height: 30px;
    border-color: #0084ff;
    display: inline-block;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    border: 1px solid;
    border-radius: 3px;
    outline: none;
    -webkit-appearance: none;
    transition: all .3 ease;
  }
}
</style>



<template>
  <div id="app">
    <router-view/>
    <div class="bg">
      <canvas id="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  min-width: 900px;
  overflow: hidden;
  position: relative;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 10, 1);
}
#canvas {
  width: 100%;
  height: 100%;
}
</style>

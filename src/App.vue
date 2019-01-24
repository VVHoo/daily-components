<template>
  <div id="app">
    <!--<count-down :beginTime="1536307968" :endTime="1536394368" :match="'HH:MM'"/>-->
    <images-test />
  </div>
</template>

<script>
// import CountDown from '@/components/CountDown'
// import Sku from '@/components/Sku'
import ImagesTest from '@/components/ImagesTest'
export default {
  name: 'App',
  components: {
    ImagesTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

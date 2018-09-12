<template>
  <div id="app">
    <count-down :beginTime="1536307968" :endTime="1536394368" :match="'HH:MM'"/>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'

export default {
  name: 'App',
  components: {
    CountDown
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hello-world></hello-world> -->
    <!-- <router-link :to='{path: "HelloWorld"}'>to HelloWorld</router-link> -->
    <!-- <router-link :to='{name: "HelloWorld"}'>to HelloWorld</router-link> -->
    <router-link :to='`/HelloWorld`'>to HelloWorld</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
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

<template>
  <div id="app">
    <keep-alive exclude="detail"> 
      <router-view/>
    </keep-alive>
    <main-tab-bar-item></main-tab-bar-item>
  </div>
</template>

<script>
import MainTabBarItem from "./components/conent/MainTabBarItem";
export default {
  name: "App",
  components: {
    MainTabBarItem
  }
};
</script>

<style>
@import "./assets/css/beast.css";
</style>

<template>
  <div id="app">
     <!-- 3、使用 -->
    <MyButton></MyButton>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
//1、引入
import MyButton from "./components/my-button.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    //2、声明
    MyButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

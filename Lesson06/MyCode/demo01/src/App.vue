<template>
    <div id="app">
        <div class="title">Lesson06.CLI中如何处理CSS相关内容</div>
        <button class="btn-enter">进入课程</button>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from "./components/HelloWorld.vue";

    export default {
        name: "app",
        components: {
            HelloWorld
        }
    };
</script>

<!--修改为使用scss-->
<style lang="scss">
//   注释手动导入
    /*@import "./less/colors.less";*/
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .title {
    /*修改为使用scss*/
    color:$primary-color;
    font-size:$normal-size;}
    .btn-enter {color:$primary-color; }
</style>

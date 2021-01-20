<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Bee32
      class="test"
      :class="testClass"
      style="color: red;"
      :style="testStyle"
      title="I am a title"
      data-other="data-other"
      @click="handleClick"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Bee32 } from "@carbon/icons-vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Bee32
  },
  data() {
    return {
      testClass: "test-class",
      testStyle: {
        transform: "rotate(45deg)"
      }
    };
  },
  methods: {
    handleClick() {
      alert("click");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.test {
  background-color: yellow;
}

.test-class {
  box-shadow: 0 0 0 5px green;
}
</style>

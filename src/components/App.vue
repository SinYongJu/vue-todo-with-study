<template>
  <div id="app">
    <h1>TODO</h1>
    <div>
      <TextFiled />
      <input type="text" />
      <button type="button">CREATE</button>
    </div>
    <div>
      <strong>Todo List</strong>
      <ul>
        <li>
          <p>TODO TODO</p>
          <button type="button">update</button>
          <button type="button">delete</button>
        </li>
      </ul>
    </div>
    <button type="button">All clear</button>
  </div>
</template>

<script>
import TextFiled from "./TextFiled.vue";

export default {
  name: "App",
  components: {
    TextFiled
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

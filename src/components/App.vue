<template>
  <div id="app">
    <h1>TODO</h1>
    <TextFiled @create="create" />
    <TodoList :isClear="!(todoList.length > 0)" @clear="clearTodo">
      <TodoItem
        v-for="(todo, index) of todoList"
        :key="todo.id"
        :todo="todo"
        :index="index"
        @update="update"
        @delete="deleteTodo"
        @modify="modify"
      />
    </TodoList>
  </div>
</template>

<script>
import TextFiled from "./TextFiled.vue";
import TodoList from "./TodoList.vue";
import TodoItem from "./TodoItem.vue";

// vuex 주입
import vuex from "vuex";
const { mapGetters, mapActions } = vuex.createNamespacedHelpers("todo");

export default {
  name: "App",
  computed: {
    ...mapGetters(["todoList"])
  },
  methods: {
    ...mapActions(["create", "update", "deleteTodo", "clearTodo", "modify"])
  },
  components: {
    TextFiled,
    TodoList,
    TodoItem
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

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
export default {
  name: "App",
  data() {
    return {
      todoList: [
        // {
        //   id: 0,
        //   desc: "Todo todo todo ...",
        //   isModify: false
        // },
      ]
    };
  },
  methods: {
    /**
     * create Todo
     * @param {String} desc
     */
    create(desc) {
      const { todoList } = this;
      const todo = {};
      const prev = todoList[todoList.length - 1];
      const prevId = prev ? prev.id : 0;
      const id = prevId + 1;
      todo.id = id;
      todo.desc = desc;
      todo.isModify = false;
      this.todoList = todoList.concat(todo);
    },
    /**
     * update Todo
     * @param { Number } id
     */
    update(id) {
      let target = this.todoList.findIndex(todo => todo.id === id);
      this.todoList[target].isModify = true;
    },
    /**
     * delete Todo
     * @param { Number } id
     */
    deleteTodo(id) {
      const { todoList } = this;
      let target = todoList.findIndex(todo => todo.id === id);
      let prev = todoList.slice(0, target);
      let next = todoList.slice(target + 1, todoList.length);
      this.todoList = [...prev, ...next];
    },
    /**
     * clear Todo List
     *
     */
    clearTodo() {
      this.todoList = [];
    },
    /**
     * Modify Todo List
     *
     * id : todo id
     * desc : todo desc
     *  @param {Object} todoItem
     *
     */
    modify({ id, desc }) {
      let target = this.todoList.findIndex(todo => todo.id === id);
      this.todoList[target].desc = desc;
      this.todoList[target].isModify = false;
    }
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

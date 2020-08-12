<template>
  <div class="todo_list">
    <strong>Todo List</strong>
    <ol v-if="!isClear" class="list_todo">
      <slot />
    </ol>
    <p v-else class="null_todo">Insert Your Todo List.</p>
    <Button type="button" class="btn_clear" @click="allClear()"
      >All clear</Button
    >
  </div>
</template>

<script>
// import TodoItem from "./TodoItem.vue";
import Button from "./common/Button.vue";
export default {
  props: {
    isClear: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    allClear() {
      this.$emit("clear");
    }
  },
  components: {
    Button
    // TodoItem
  }
};
</script>

<style scoped>
ul,
ol {
  list-style: none;
  text-align: left;
}
p,
ol,
ul {
  margin: 0;
  padding: 0;
}
.todo_list {
  margin: 20px 0;
}

.todo_list .null_todo,
.todo_list .list_todo {
  margin: 10px 0 20px;
}
.todo_list .null_todo {
  min-height: 400px;
  line-height: 400px;
  background-color: #eee;
}

.todo_list .btn_clear {
  display: block;
  overflow: hidden;
  width: 100px;
  font-size: 16px;
  line-height: 18px;
  padding: 5px 20px;
  border-radius: 6px;
  background-color: red;
  color: #fff;
}
</style>

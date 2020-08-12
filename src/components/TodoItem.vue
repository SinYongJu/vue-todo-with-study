<template>
  <li>
    <em>{{index + 1}}</em>
    <template v-if="!todo.isModify">
      <p>{{todo.desc}}</p>
      <Button type="button" @click="updateTodo(todo.id)">update</Button>
      <Button type="button" @click="deleteTodo(todo.id)">delete</Button>
    </template>
    <template v-else>
      <Input v-model="desc" />
      <span>
        <Button type="button" @click="modifyTodo(todo.id)">modify</Button>
      </span>
    </template>
  </li>
</template>

<script>
import Input from "./common/Input.vue";
import Button from "./common/Button.vue";
export default {
  props: {
    todo: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      desc: this.todo.desc
    };
  },
  methods: {
    updateTodo(id) {
      this.$emit("update", id);
    },
    deleteTodo(id) {
      this.$emit("delete", id);
    },
    modifyTodo(id) {
      this.$emit("modify", {
        id,
        desc: this.desc
      });
    }
  },
  components: {
    Input,
    Button
  }
};
</script>

<style>
</style>
<template>
  <li>
    <em>{{ index + 1 }}.</em>
    <template v-if="!todo.isModify">
      <p>{{ todo.desc }}</p>
      <Button type="button" @click="updateTodo(todo.id)">update</Button>
      <Button type="button" @click="deleteTodo(todo.id)">delete</Button>
    </template>
    <template v-else>
      <Input v-model="desc" />
      <Button type="button" @click="modifyTodo(todo.id)">modify</Button>
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

<style scoped>
li:after {
  display: block;
  clear: both;
  height: 0;
  content: "";
}
li {
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
}
li + li {
  margin-top: 10px;
}
p {
  float: left;
  margin: 0;
  padding: 0;
  width: 80%;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 18px;
  padding: 5px 10px;
}
em {
  float: left;
  font-size: 16px;
  line-height: 18px;
  padding: 5px 0;
}
button {
  float: left;
  overflow: hidden;
  width: 8%;
  font-size: 16px;
  line-height: 18px;
  padding: 5px 20px;
  border-radius: 6px;
  background-color: #bbb;
  color: #fff;
}
button + button {
  margin-left: 2%;
  background-color: yellow;
  color: #000;
}
input {
  float: left;
  width: 80%;
  border: 0 none;
  font-size: 16px;
  line-height: 18px;
  padding: 5px 20px;
  color: #000;
  background-color: #fee;
  margin-right: 4%;
}
</style>

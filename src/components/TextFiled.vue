<template>
  <div class="tf_todo" @keydown="keydown">
    <div class="inner_tf">
      <Input
        type="text"
        v-model="desc"
        @focus="focus"
        @blur="blur"
        placeholder="Insert todo.."
        ref="inp"
      />
      <Button type="button" class="btn_create" @click="createHndr"
        ><span>CREATE</span></Button
      >
    </div>
  </div>
</template>

<script>
import Input from "./common/Input.vue";
import Button from "./common/Button.vue";
export default {
  name: "TextFiled",
  data() {
    return {
      desc: ""
    };
  },
  methods: {
    keydown(event) {
      if (event.keyCode === 13) {
        this.createHndr();
      }
    },
    focus() {
      console.log("focus");
    },
    blur() {
      console.log("blur");
    },
    createHndr() {
      this.$emit("create", this.desc);
      this.$refs.inp.$el.focus(); // 다른 방법도 있으나 흠... 좀 그릏넹
      this.desc = "";
    }
  },
  components: {
    Input,
    Button
  }
};
</script>

<style scoped>
.tf_todo:after {
  clear: both;
  display: block;
  height: 0;
  content: "";
}
.tf_todo input {
  float: left;
  box-sizing: border-box;
  width: 80%;
  padding: 5px 8px;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid #eee;
  margin-right: 10px;
}
.tf_todo .btn_create {
  display: block;
  overflow: hidden;
  width: 18%;
  height: 100%;
  font-size: 16px;
  line-height: 18px;
  padding: 5px 20px;
  border-radius: 6px;
  background-color: aqua;
}
</style>

<template>
  <div @keydown="keydown">
    <Input type="text" v-model="desc" @focus="focus" @blur="blur" ref="inp" />
    <Button type="button" @click="createHndr">CREATE</Button>
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
</style>

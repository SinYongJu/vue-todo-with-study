<template>
  <div @keydown.enter="createHndr">
    <Input type="text" v-model="value" @focus="focus" @blur="blur" ref="inp" />
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
      value: ""
    };
  },
  props: {},
  methods: {
    createHndr() {
      this.$emit("create", this.value);
      this.$refs.inp.$el.focus(); // 다른 방법도 있으나 흠... 좀 그릏넹
      this.value = "";
    },
    focus() {
      console.log("focus");
    },
    blur() {
      console.log("blur");
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

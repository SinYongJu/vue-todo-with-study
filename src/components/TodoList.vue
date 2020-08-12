<template>
  <div>
    <strong>Todo List</strong>
    <ol v-if="!isClear">
      <slot />
    </ol>
    <p v-else>Insert Your Todo List.</p>
    <Button type="button" @click="allClear()">All clear</Button>
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

<style>
ul,
ol {
  list-style: none;
}
</style>
<template>
  <input type="text" @input="input" :value="computedValue" @focus="focus" @blur="blur" ref="input" />
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    input(e) {
      this.computedValue = e.target.value;
    },
    focus() {
      //   this.$refs.input.focus();
      this.$emit("focus");
    },
    blur() {
      //   this.$refs.input.blur();
      this.$emit("blur");
    }
  }
};
</script>

<style>
</style>
<template>
  <button v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {};
</script>
<style scoped>
button {
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: top;
}
</style>

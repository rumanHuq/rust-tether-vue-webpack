<template>
  <label id="id" class="f-label">{{ value }}</label>
</template>

<script lang="js">
export default {
  name: "FLabel",
  props: {
    id: {
      default: null,
      type: String,
    },
    value: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="scss">
@import "@/style";

.f-label {
  color: $color-gray-dark;
  display: inline-block;
  font-family: $font-family-primary;
  font-size: 10px;
  text-transform: uppercase;
}
</style>

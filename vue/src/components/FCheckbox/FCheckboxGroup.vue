<template>
  <div class="f-checkbox-group">
    <f-checkbox
      v-for="item in checkboxItems"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      :checked="item.checked"
      :disabled="item.disabled || false"
      @change="(value, checked) => onChange(value, checked)"
    />
  </div>
</template>

<script lang="js" src="./FCheckboxGroup.js"></script>
<style lang="scss" scoped>
@import "@/style";

.f-checkbox-group {
  margin: 10px auto;
  overflow: hidden;
}
</style>

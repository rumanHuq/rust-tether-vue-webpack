<template>
  <button
    :id="id"
    :disabled="disabled ? 'disabled' : null"
    :type="type"
    :class="[variant]"
    class="f-button"
    @click="onClick"
  >
    <slot />
    <f-icon v-if="icon" :name="icon" />
  </button>
</template>

<script src="./FButton.js"></script>
<style lang="scss" src="./FButton.scss"></style>

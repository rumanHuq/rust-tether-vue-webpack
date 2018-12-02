<template>
  <i :class="iconClass" />
</template>
<script lang="js" src="./FIcon.js"></script>
<style lang="scss">
.f-icon {
  /* use !important to prevent issues with browser
    extensions that change fonts
  */
  display: inline-block;
  font-family: "Fbly-icons", Cochin, Georgia, Times, "Times New Roman", serif !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1;
  text-transform: none;

  &::before {
    display: inline-block;
  }
}
</style>

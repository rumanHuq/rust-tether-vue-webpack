<template>
  <div class="f-input-text">
    <f-label v-if="label" class="f-input-text__label" :value="label" />
    <input
      :autocomplete="autocomplete ? 'on' : 'off'"
      :type="type"
      :id="id"
      :disabled="disabled ? 'disabled' : null"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      class="f-input-text__input"
      @input="onInput"
    />
  </div>
</template>

<script lang="js" src="./FInputText.js"></script>
<style lang="scss">
@import "@/style";

.f-input-text {
  margin: 10px auto;

  &__input {
    border: 1px solid $color-gray-light;
    border-radius: 2px;
    color: $color-gray-dark;
    display: block;
    font-family: $font-family-primary;
    font-size: 14px;
    height: 30px;
    margin-top: 5px;
    padding: 4px;
    width: 100%;

    &:active,
    &:focus {
      border: 1px solid $color-primary;
      outline: none;
    }

    &:disabled {
      background: $color-gray-light;
      border: 1px solid $color-gray-light;
    }
  }
}
</style>

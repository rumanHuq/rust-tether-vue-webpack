<template>
  <label class="f-checkbox" :class="{ disabled: disabled }">
    {{ label }}
    <input
      type="checkbox"
      :id="id"
      :disabled="disabled ? 'disabled' : null"
      :name="name"
      :value="value"
      :checked="checked"
      class="f-checkbox__input"
      @change="onChange"
    />
    <span class="f-checkbox__checkmark"></span>
  </label>
</template>

<script lang="js" src="./FCheckbox.js"></script>
<style lang="scss">
@import "@/style";

.f-checkbox {
  cursor: pointer;
  display: block;
  font-size: 12px;
  margin: 10px auto;
  padding-left: 25px;
  position: relative;

  @include disableSelect();

  &__input {
    opacity: 0;
    position: absolute;
  }

  /* Unchecked styles */
  &__checkmark {
    border: 1px solid $color-gray;
    border-radius: 2px;
    height: 15px;
    left: 0;
    position: absolute;
    top: 0;
    width: 15px;

    &::after {
      /* Checked styles */
      background: $color-primary;
      border-radius: 2px;
      content: "";
      display: none;
      height: 9px;
      left: 2px;
      position: absolute;
      top: 2px;
      width: 9px;
    }
  }

  &.disabled {
    color: $color-gray;
    cursor: default;

    .f-checkbox__checkmark {
      background-color: $color-gray-light;
    }
  }

  &:hover &__input ~ &__checkmark {
    border: 1px solid $color-primary;
  }

  &__input:checked ~ &__checkmark:after {
    display: block;
  }
}
</style>

<template>
  <div class="f-select-box" v-click-outside="hideMenu">
    <f-label :value="label"></f-label>
    <div class="f-select-box__select">
      <input
        type="text"
        autocomplete="off"
        class="f-select-box__select__input"
        :value="selectedItem.label"
        @input="onSelectInput"
        @focus="onInputFocus"
      />
      <div class="f-select-box__select__handle" @click="toggleMenu">
        <div class="f-select-box__select__handle__icon">
          <f-icon name="icon-chevron-down" :class="{ open: menuOpen }" />
        </div>
      </div>
      <ul class="f-select-box__select__menu" :class="{ open: menuOpen }">
        <template v-for="item in items">
          <li
            class="f-select-box__select__menu__item"
            tabindex="0"
            :key="item.value"
            @click="onSelectItem(item);"
            @keydown.enter="onSelectItem(item);"
          >
            {{ item.label }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="js" src="./FSelectBox.js"></script>
<style lang="scss" scoped>
@import "@/style";

.f-select-box {
  margin: 10px auto;

  &__select {
    display: flex;
    margin: 0;
    margin-top: 5px;
    padding: 0;
    position: relative;

    &__input {
      border: 0;
      border-color: $color-gray;
      border-style: solid;
      border-width: 1px 0 1px 1px;
      height: 30px;
      outline: none;
      padding-left: 4px;
      width: 100%;

      &:hover {
        border-color: $color-primary;
      }
    }

    &__handle {
      border-color: $color-gray;
      border-style: solid;
      border-width: 1px;
      cursor: pointer;
      height: 30px;
      text-align: center;
      width: 30px;

      &:hover {
        border-color: $color-primary;
      }

      &__icon {
        color: $color-primary;
        display: inline-block;
        line-height: 30px;
      }

      &__icon .f-icon {
        transform: rotate(0deg);
        transition: all 0.3s;
        /* stylelint-disable max-nesting-depth */
        &.open {
          transform: rotate(180deg);
        }
      }
    }

    &__menu {
      border: 1px solid $color-gray;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
      display: none;
      left: 0;
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      top: 29px;
      width: 100%;

      &__item {
        @include disableSelect();

        background-color: #fff;
        border-bottom: 1px solid $color-gray-light;
        cursor: pointer;
        font-size: 12px;
        outline: none;
        padding: 5px;
        transition: all 0.3s;

        &:focus,
        &:hover {
          background-color: $color-primary;
          color: #fff;
        }
      }

      &.open {
        display: block;
      }
    }
  }
}
</style>

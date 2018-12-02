<template>
  <p>feedbackly storybook!</p>
</template>
<script lang="ts">
interface Idata {
  hello: string;
}
export default {
  data: () =>
    ({
      hello: "people",
      moi: 12,
    } as Idata),
};
</script>

<style lang="scss" scoped>
p {
  color: #e0a;
}
</style>

<template>
  <hr :class="`form-full relative ${withoutHr && 'hidden'}`" />
  <div class="form-full">
    <h3 class="text-lg leading-6 font-medium text-gray-900">{{ title }}</h3>
    <fieldset class="space-y-6">
      <legend class="sr-only">{{ title }}</legend>
      <slot></slot>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "Fieldset",
  props: {
    title: {
      type: String,
      default: "",
    },
    withoutHr: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

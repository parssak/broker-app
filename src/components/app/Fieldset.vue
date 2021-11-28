<template>
  <div class="form-full">
    <h3 class="text-lg leading-6 font-medium text-gray-900">{{ title }}</h3>
    <fieldset class="space-y-6">
      <legend class="sr-only">{{ title }}</legend>
      <slot></slot>
    </fieldset>
  </div>
</template>

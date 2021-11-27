<template>
  <div>
    <label class="text-base font-medium text-gray-900">{{ title }}</label>
    <p class="text-sm leading-5 text-gray-500">
      {{ description }}
    </p>
    <fieldset class="mt-4">
      <legend class="sr-only">{{ legend }}</legend>
      <div class="space-y-4">
        <div v-for="item in items" :key="item.id" class="flex items-center">
          <input
            :id="item.id"
            :name="itemsName"
            type="radio"
            :checked="item.id === 'email'"
            class="
              focus:ring-indigo-500
              h-4
              w-4
              text-indigo-600
              border-gray-300
            "
            @change="onChange"
          />
          <label
            :for="item.id"
            class="ml-3 block text-sm font-medium text-gray-700"
          >
            {{ item.title }}
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
const defaultItems = [
  { id: "email", title: "Email" },
  { id: "sms", title: "Phone (SMS)" },
  { id: "push", title: "Push notification" },
];

export default {
  props: {
    title: {
      type: String,
      default: "Notifications",
    },
    description: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur?",
    },
    items: {
      type: Array,
      default: () => defaultItems,
    },
    itemsName: {
      type: String,
      default: "notification-method",
    },
    legend: {
      type: String,
      default: "Notification Method",
    },
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
    },
  },
};
</script>

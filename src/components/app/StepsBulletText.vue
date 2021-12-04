<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <nav class="flex justify-center" aria-label="Progress">
      <ol role="list" class="space-y-6">
        <li v-for="step in steps" :key="step.name">
          <button
            v-if="step.status === 'complete'"
            @click="setActiveStep(step.id)"
            class="group"
          >
            <span class="flex items-start">
              <span
                class="
                  flex-shrink-0
                  relative
                  h-5
                  w-5
                  flex
                  items-center
                  justify-center
                "
              >
                <CheckCircleIcon
                  class="
                    h-full
                    w-full
                    text-indigo-600
                    group-hover:text-indigo-800
                  "
                  aria-hidden="true"
                />
              </span>
              <span
                class="
                  ml-3
                  text-sm
                  font-medium
                  text-gray-500
                  group-hover:text-gray-900
                "
                >{{ step.name }}</span
              >
            </span>
          </button>
          <button
            v-else-if="step.status === 'current'"
            @click="setActiveStep(step.id)"
            class="flex items-start"
            aria-current="step"
          >
            <span
              class="
                flex-shrink-0
                h-5
                w-5
                relative
                flex
                items-center
                justify-center
              "
              aria-hidden="true"
            >
              <span class="absolute h-4 w-4 rounded-full bg-indigo-200" />
              <span class="relative block w-2 h-2 bg-indigo-600 rounded-full" />
            </span>
            <span class="ml-3 text-sm font-medium text-indigo-600">{{
              step.name
            }}</span>
          </button>
          <button v-else @click="setActiveStep(step.id)" class="group">
            <div class="flex items-start">
              <div
                class="
                  flex-shrink-0
                  h-5
                  w-5
                  relative
                  flex
                  items-center
                  justify-center
                "
                aria-hidden="true"
              >
                <div
                  class="
                    h-2
                    w-2
                    bg-gray-300
                    rounded-full
                    group-hover:bg-gray-400
                  "
                />
              </div>
              <p
                class="
                  ml-3
                  text-sm
                  font-medium
                  text-gray-500
                  group-hover:text-gray-900
                "
              >
                {{ step.name }}
              </p>
            </div>
          </button>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/solid";

const defaultSteps = [
  { name: "Create account", id: "#", status: "complete" },
  { name: "Profile information", id: "#", status: "current" },
  { name: "Theme", id: "#", status: "upcoming" },
  { name: "Preview", id: "#", status: "upcoming" },
];

export default {
  components: {
    CheckCircleIcon,
  },
  props: {
    steps: {
      type: Array,
      default: () => defaultSteps,
    },
  },
  methods: {
    setActiveStep(id) {
      const currentIndex = this.steps.findIndex(
        (step) => step.status === "current"
      );
      const newIndex = this.steps.findIndex((step) => step.id === id);
      if (currentIndex === newIndex) return;

      const newSteps = this.steps.map((step, index) => {
        if (index === currentIndex) {
          return { ...step, status: "complete" };
        } else if (index === this.steps.findIndex((step) => step.id === id)) {
          return { ...step, status: "current" };
        } else {
          return { ...step, status: "upcoming" };
        }
      });
      this.$emit("change", newSteps);
    },
  },
};
</script>

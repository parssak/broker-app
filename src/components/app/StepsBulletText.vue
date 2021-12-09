<template>
  <div class="py-12 pr-6">
    <nav class="flex justify-center" aria-label="Progress">
      <ol role="list" class="space-y-6">
        <li v-for="step in steps" :key="step.name">
          <div v-if="step.status !== 'hidden'">
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
                    text-left text-gray-500
                    group-hover:text-gray-900
                  "
                  >{{ step.name }}</span
                >
              </span>
            </button>
            <div v-else-if="step.status === 'current'" class="space-y-1">
              <button
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
                  <span
                    class="relative block w-2 h-2 bg-indigo-600 rounded-full"
                  />
                </span>
                <span
                  class="text-left ml-3 text-sm font-medium text-indigo-600"
                  >{{ step.name }}</span
                >
              </button>
              <button
                v-for="category in step.categories"
                :key="category.id"
                :href="`#${category.id}`"
                :class="`
                  block
                  text-sm
                  pl-8
                  pb-0.5
                  font-medium
                  text-gray-500
                  hover:text-gray-900
                  ${category.status === 'current' ? 'text-indigo-500' : ''}
                  `"
                @click="setActiveCategory(category.id)"
              >
                {{ category.label }}
              </button>
            </div>
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
                    text-left text-gray-500
                    group-hover:text-gray-900
                  "
                >
                  {{ step.name }}
                </p>
              </div>
            </button>
          </div>
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
        if (index < newIndex) return { ...step, status: "complete" };
        if (index > newIndex)
          return {
            ...step,
            status: step.status === "hidden" ? "hidden" : "upcoming",
          };
        return { ...step, status: "current" };
      });
      this.$emit("change", newSteps);
    },
    setActiveCategory(id) {
      const stepIndex = this.steps.findIndex(
        (step) => step.status === "current"
      );
      const categoryIndex = this.steps[stepIndex].categories.findIndex(
        (category) => category.id === id
      );
      console.debug(id);
      const steps = this.steps;
      steps[stepIndex].categories.forEach((category, index) => {
        if (index < categoryIndex) return;
        if (index > categoryIndex)
          return {
            ...category,
            status: category.status === "hidden" ? "hidden" : "upcoming",
          };
        return { ...category, status: "current" };
      });
      console.log(steps);
      this.$emit("change", steps);
    },
  },
};
</script>

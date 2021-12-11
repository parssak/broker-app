<template>
  <FullSplit class="min-h-full-screen">
    <template v-slot:left>
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-900
          sm:text-5xl
          md:text-6xl
        "
      >
        Looking to lend money?
      </h1>
      <p class="text-xl text-gray-500 leading-relaxed mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sunt
        officiis velit voluptatem mollitia alias nihil nam laborum, iusto
        laudantium.
      </p>
      <router-link to="/form" class="mt-6 btn btn-lg">Start now &rarr;</router-link>
    </template>
    <template v-slot:right>
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          class="absolute inset-0 bg-accent mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
    </template>
  </FullSplit>
  <FullSplit class="min-h-full-screen" flipped>
    <template v-slot:left>
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-900
          sm:text-5xl
          md:text-6xl
        "
      >
        Looking to borrow money?
      </h1>
      <p class="text-xl text-gray-500 leading-relaxed mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sunt
        officiis velit voluptatem mollitia alias nihil nam laborum, iusto
        laudantium.
      </p>
      <router-link to="/form" class="mt-6 btn btn-lg">Start now &rarr;</router-link>
    </template>
    <template v-slot:right>
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          class="absolute inset-0 bg-accent mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
    </template>
  </FullSplit>
</template>

import BorrowerQuestions from "../form/BorrowerQuestions.vue";
<script>
import FullSplit from "../../components/layouts/FullSplit.vue";
export default {
  components: { FullSplit },
  setup() {
    return {};
  },
};
</script>

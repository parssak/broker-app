<template>
  <Header title="about" />

  <Split
    title="Lorem Ipsum"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non vel quidem sit neque iste minus ratione eveniet voluptas praesentium architecto, voluptatem, quas rerum temporibus iusto itaque quam aliquam, est quibusdam. Odit provident reiciendis sequi, aliquid earum amet corrupti quis libero at atque similique? Sint nemo rerum reprehenderit alias eos."
  >
    <img
      src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
    />
  </Split>
  <Split
    title="Lorem Ipsum"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non vel quidem sit neque iste minus ratione eveniet voluptas praesentium architecto, voluptatem, quas rerum temporibus iusto itaque quam aliquam, est quibusdam. Odit provident reiciendis sequi, aliquid earum amet corrupti quis libero at atque similique? Sint nemo rerum reprehenderit alias eos."
    flip
    class="bg-accent-lightest"
  >
    <img
      src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
    />
  </Split>
  <Split
    title="Lorem Ipsum"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non vel quidem sit neque iste minus ratione eveniet voluptas praesentium architecto, voluptatem, quas rerum temporibus iusto itaque quam aliquam, est quibusdam. Odit provident reiciendis sequi, aliquid earum amet corrupti quis libero at atque similique? Sint nemo rerum reprehenderit alias eos."
  >
    <img
      src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
    />
  </Split>
</template>

<script>
import Split from "../../components/layouts/Split.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Split,
  },
};
</script>

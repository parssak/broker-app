<template>
  <Header title="home" />

  <!-- Container -->
  <Container> </Container>

  <!-- FullSplit -->
  <FullSplit> </FullSplit>

  <!-- SimpleBrandCTA -->
  <SimpleBrandCTA />

  <!-- SplitCTA -->
  <SplitCTA />
</template>

<script>
import Header from "@/components/base/Header";
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import SimpleBrandCTA from "@/components/layouts/cta/SimpleBrandCTA.vue";
import SplitCTA from "@/components/layouts/cta/SplitCTA.vue";
import PeopleGrid from "@/components/layouts/people/PeopleGrid.vue";

export default {
  components: {
    Header,
    Container,
    FullSplit,
    SimpleBrandCTA,
    SplitCTA,
    PeopleGrid,
  },
};
</script>

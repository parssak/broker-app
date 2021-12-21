<template>
  <div class="min-h-full-screen">
    <Header title="Received Offers" />

    <Container>
      <WithAvatarTable />
    </Container>
  </div>
</template>

<script>
import WithAvatarTable from "../../components/layouts/tables/WithAvatarTable.vue";
import CustomTable from "../../components/layouts/tables/CustomTable.vue";
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Split,
    Container,
    CustomTable,
    WithAvatarTable,
  },
};
</script>

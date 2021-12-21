<template>
  <Header title="dashboard" />

  <Container class="typography">
    <h2>Recieved Offers</h2>
    <CustomTable />
  </Container>
</template>

<script>
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
  },
};
</script>

<template>
  <Header title="contact" />
  <ContactCard style="min-height: 60vh" class="h-full" />
</template>

<script>
import ContactCard from "../../components/layouts/contact/ContactCard.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    ContactCard,
  },
};
</script>

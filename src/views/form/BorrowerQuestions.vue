<template>
  <Form
    title="Initial Borrower Questions"
    id="initial-broker-questions"
    @submit="handleSubmit"
  >
    <CheckListSimple
      title="Mortgage Deal Type"
      :items="mortgageTypes"
      itemsName="mortgages"
    />
  </Form>
</template>

<script>
import RadioListSimple from "@/components/base/inputs/RadioListSimple.vue";
import CheckListSimple from "@/components/base/inputs/CheckListSimple.vue";
import Form from "@/components/app/Form.vue";
import * as data from "@/data";

export default {
  components: { Form, RadioListSimple, CheckListSimple },
  setup() {
    return {
      mortgageTypes: data.mortgageTypes,
    };
  },
};
</script>

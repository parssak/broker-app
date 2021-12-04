<template>
  <Form
    :title="steps[0].name"
    :id="steps[0].id"
    @submit="handleSubmit"
    :class="steps[0].status !== 'current' && 'hidden'"
  >
    <div class="todo">add fields</div>
  </Form>

  <Form
    :title="steps[1].name"
    :id="steps[1].id"
    @submit="handleSubmit"
    :class="steps[1].status !== 'current' && 'hidden'"
  >
    <RadioListSimple
      title="Mortgage Deal Type"
      :items="mortgageTypes"
      itemsName="mortgages"
    />
  </Form>

  <Form
    :title="steps[2]?.name"
    :id="steps[2]?.id"
    @submit="handleSubmit"
    :class="steps[2]?.status !== 'current' && 'hidden'"
  >
    <Input label="Property Location(s)" />
    <CheckListSimple
      title="Term Lengths"
      :items="termLengths"
      description="Select all that apply"
      :columns="2"
    />
    <CheckListSimple
      title="Charges Offered"
      :items="chargeTypes"
      description="Select all that apply"
    />
    <SelectInput label="Property Style" :items="propertyStyles" />
    <Input type="number" label="Minimum Square Footage" />
    <Input type="number" label="Maximum Square Footage" />
    <RadioListSimple
      itemsName="location"
      title="Location"
      :items="locations"
      :horizontal="true"
      class="md:w-2/3"
    />
    <RadioListSimple
      itemsName="air"
      title="Air-Conditioning"
      :items="acOptions"
      :horizontal="true"
      class="md:w-2/3"
    />
    <RadioListSimple
      itemsName="water"
      title="Water"
      :items="waterOptions"
      :horizontal="true"
      class="md:w-2/3"
    />
    <RadioListSimple
      itemsName="sewage"
      title="Sewage"
      :items="sewageOptions"
      :horizontal="true"
      class="md:w-2/3"
    />
    <RadioListSimple
      itemsName="heating"
      title="Heating"
      :items="heatOptions"
      :horizontal="true"
      class="md:w-2/3"
    />

    <CheckListSimple
      title="Loan Types Offered"
      :items="loanTypes"
      description="Select all that apply"
    />

    <CheckListSimple
      title="Allowable Loan Purposes"
      :items="allowableLoanPurposes"
      description="Select all that apply"
      :columns="2"
      columnsBreakpoint="md"
    />

    <MoneyInput label="Minimum Loan Amount" />
    <MoneyInput label="Maximum Loan Amount" />

    <Input type="number" label="Maximum LTV (Loan-To-Value)" />

    <SwitchWithLabel label="Collateral/Blanket Charges" />
    <SwitchWithLabel label="Non-Resident Corporation - Borrowers(s)" />
    <SwitchWithLabel
      label="Non-Citizen/Permanent Resident - Any Directors & Officers:"
    />

    <Input type="number" label="Maximum GDS" />
    <Input type="number" label="Maximum TDS" />

    <CheckListSimple title="Bankruptcy" :items="bankruptcyOptions" />
    <CheckListSimple title="Consumer" :items="consumerOptions" />

    <Fieldset
      title="Environmental Report(s), Reliance Letter(s) & Peer Review(s)"
    >
      <RadioListSimple
        title="Environmental Site Assessment (ESA) for the Property?"
        :items="providedOptions"
        itemsName="esa"
      />

      <RadioListSimple
        title="Peer Review of ESA"
        :items="providedOptions"
        itemsName="esa-review"
      />

      <RadioListSimple
        title="Environmental Reliance Letter (ERL) for the Property?"
        :items="providedOptions"
        itemsName="erl"
      />

      <RadioListSimple
        title="Peer Review of ERL"
        :items="providedOptions"
        itemsName="erl-review"
      />
    </Fieldset>

    <Fieldset title="Geotechnical Report(s) & Peer Review(s)">
      <RadioListSimple
        title="Geotechnical Report (GR) for the Property"
        :items="providedOptions"
        itemsName="gr"
      />
      <RadioListSimple
        title="Peer Review of GR"
        :items="providedOptions"
        itemsName="gr-review"
      />
      <RadioListSimple
        title="Geotechnical Reliance Letter (GRL) for the Property"
        :items="providedOptions"
        itemsName="grl"
      />
      <RadioListSimple
        title="Peer Review of GRL"
        :items="providedOptions"
        itemsName="grl-review"
      />
    </Fieldset>

    <Fieldset title="Appraisal Report(s) & Peer Review(s)">
      <RadioListSimple
        title="Appraisal Report (AR) for the Property"
        :items="providedOptions"
        itemsName="ar"
      />

      <RadioListSimple
        title="Peer Review of AR"
        :items="providedOptions"
        itemsName="ar-review"
      />

      <RadioListSimple
        title="Appraisal Reliance Letter (ARL) for the Property"
        :items="providedOptions"
        itemsName="arl"
      />

      <RadioListSimple
        title="Peer Review of ARL"
        :items="providedOptions"
        itemsName="arl-review"
      />
    </Fieldset>

    <Fieldset>
      <RadioListSimple
        title="Current Survey for the Property"
        :items="providedOptions"
        itemsName="survey"
      />

      <RadioListSimple
        title="Market Research & Analysis of the Property"
        :items="providedOptions"
        itemsName="market"
      />
    </Fieldset>

    <Fieldset>
      <RadioListSimple
        title="Insurance Policies for the Property"
        :items="providedOptions"
        itemsName="insurance"
      />

      <RadioListSimple
        title="Project Drawings for the Property"
        :items="providedOptions"
        itemsName="drawing"
      />
    </Fieldset>

    <Fieldset>
      <RadioListSimple
        title="Property Taxes current (paid) for the Property"
        :items="providedOptions"
        itemsName="property-tax"
      />
      <RadioListSimple
        title="Title Searches for the Property"
        :items="providedOptions"
        itemsName="title-search"
      />
    </Fieldset>

    <Fieldset>
      <RadioListSimple
        title="Budget or Financial Proforma for the Property"
        :items="providedOptions"
        itemsName="project-budget"
      />
      <RadioListSimple
        title="Title Insurance for the Property"
        :items="providedOptions"
        itemsName="title-insurance"
      />
    </Fieldset>

    <Input label="Any Brokers/Brokerages Not Allowed" />
    <Input label="Any Preferred Brokers/Brokerages" />
  </Form>
</template>

<script>
import SelectInput from "@/components/base/inputs/SelectInput.vue";
import SwitchWithLabel from "@/components/base/inputs/SwitchWithLabel.vue";
import MoneyInput from "@/components/base/inputs/MoneyInput.vue";
import RadioListSimple from "@/components/base/inputs/RadioListSimple.vue";
import CheckListSimple from "@/components/base/inputs/CheckListSimple.vue";
import Form from "@/components/app/Form.vue";
import Fieldset from "@/components/app/Fieldset.vue";
import Input from "@/components/base/inputs/Input.vue";
import * as data from "@/data";

export default {
  components: {
    Form,
    RadioListSimple,
    Input,
    Fieldset,
    CheckListSimple,
    MoneyInput,
    SwitchWithLabel,
    SelectInput,
  },
  props: {
    steps: {
      type: Array,
    },
    onStepsChange: {
      type: Function,
    },
  },
  setup() {
    return {
      mortgageTypes: data.mortgageTypes,
      chargeTypes: data.chargeTypes,
      propertyStyles: data.propertyStyles,
      termLengths: data.termLengths,
      mortgageOptions: data.mortgageOptions,
      locations: data.locations,
      acOptions: data.acOptions,
      waterOptions: data.waterOptions,
      sewageOptions: data.sewageOptions,
      heatOptions: data.heatOptions,
      loanTypes: data.loanTypes,
      allowableLoanPurposes: data.allowableLoanPurposes,
      bankruptcyOptions: data.bankruptcyOptions,
      consumerOptions: data.consumerOptions,
      providedOptions: data.providedOptions,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const id = e.target?.id;
      const currentIdx = this.steps.findIndex((step) => step.id === id);
      const newSteps = this.steps.map((step, index) => {
        if (index <= currentIdx) {
          return {
            ...step,
            status: "complete",
          };
        }
        if (index === currentIdx + 1) {
          return {
            ...step,
            status: "current",
          };
        }
        return step;
      });
      if (
        id === "initial-questions" &&
        (!newSteps[2]?.id.startsWith("commercial-") ||
          !newSteps[2]?.id.startsWith("residential"))
      ) {
        console.debug(newSteps[2]?.id.startsWith("commercial-"));
        // check which option was selected
        const chosenType = [
          ...document
            .querySelector("#initial-questions")
            .getElementsByTagName("input"),
        ].find((e) => e.checked)?.id;
        // insert as 3rd step

        if (chosenType === "commercial-less-3") {
          newSteps.splice(2, 0, {
            id: "commercial-less-3",
            name: "Mortgage Lending Criteria < $3M",
            status: "current",
          });
        } else if (chosenType === "commercial-greater-3") {
          newSteps.splice(2, 0, {
            id: "commercial-greater-3",
            name: "Mortgage Lending Criteria > $3M",
            status: "current",
          });
        } else if (chosenType === "residential") {
          newSteps.splice(2, 0, {
            id: "residential",
            name: "Residential",
            status: "current",
          });
        }
      }
      this.onStepsChange(newSteps);
    },
  },
};
</script>

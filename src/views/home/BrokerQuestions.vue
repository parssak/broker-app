<template>
  <h3 :class="'text-lg font-medium mb-5 text-indigo-600'">
    {{ steps.find((step) => step.status === "current").tagline }}
  </h3>
  <Form
    :title="steps[0].name"
    :id="steps[0].id"
    @submit="handleSubmit"
    :class="steps[0].status !== 'current' && 'hidden'"
  >
    <div class="grid gap-6 md:grid-cols-2">
      <Input label="First Name" class="md:w-full" />
      <Input label="Last Name" class="md:w-full" />
    </div>
    <Input label="Email address" type="email" class="md:w-full" />
    <SelectInput
      label="Country"
      :items="countryTypes"
      class="md:w-full"
      v-model="selectedCountry"
    />
    <Input label="Street address" class="md:w-full" />
    <div class="grid gap-6 md:grid-cols-3">
      <Input label="City" class="md:w-full" />
      <Input
        :label="selectedCountry.id === 'canada' ? 'Province' : 'State'"
        class="md:w-full"
      />
      <Input
        :label="selectedCountry.id === 'canada' ? 'Postal Code' : 'ZIP'"
        class="md:w-full"
      />
    </div>
  </Form>

  <Form
    :title="steps[1].name"
    :id="steps[1].id"
    @submit="handleSubmit"
    :class="steps[1].status !== 'current' && 'hidden'"
  >
    <CheckListSimple
      title="Mortgage Deal Type"
      :items="mortgageTypes"
      itemsName="mortgages"
      @change="onMortgageChange"
    />
  </Form>

  <Form
    :title="steps[2].name"
    :id="steps[2].id"
    @submit="handleSubmit"
    :class="steps[2].status !== 'current' && 'hidden'"
  >
    <LocationInput />
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

    <Fieldset
      :title="steps[2]?.categories[0]?.name"
      :id="steps[2]?.categories[0]?.id"
    >
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
    </Fieldset>

    <SwitchWithLabel label="Collateral/Blanket Charges" />
    <SwitchWithLabel label="Non-Resident Corporation - Borrowers(s)" />
    <SwitchWithLabel
      label="Non-Citizen/Permanent Resident - Any Directors & Officers:"
    />

    <Input type="number" label="Maximum GDS" />
    <Input type="number" label="Maximum TDS" />
    <Fieldset
      :title="steps[2]?.categories[1]?.name"
      :id="steps[2]?.categories[1]?.id"
    >
      <CheckListSimple title="Bankruptcy" :items="bankruptcyOptions" />
      <CheckListSimple title="Consumer" :items="consumerOptions" />
    </Fieldset>

    <Fieldset
      title="Environmental Report(s), Reliance Letter(s) & Peer Review(s)"
      :id="steps[2]?.categories[2]?.id"
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

    <Fieldset
      title="Geotechnical Report(s) & Peer Review(s)"
      :id="steps[2]?.categories[3]?.id"
    >
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

    <Fieldset
      title="Appraisal Report(s) & Peer Review(s)"
      :id="steps[2]?.categories[4]?.id"
    >
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

    <Fieldset
      :title="steps[2]?.categories[5]?.name"
      :id="steps[2]?.categories[5]?.id"
    >
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

    <Fieldset
      :title="steps[2]?.categories[6]?.name"
      :id="steps[2]?.categories[6]?.id"
    >
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

    <Fieldset
      :title="steps[2]?.categories[7]?.name"
      :id="steps[2]?.categories[7]?.id"
    >
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

    <Fieldset
      :title="steps[2]?.categories[7]?.name"
      :id="steps[2]?.categories[7]?.id"
    >
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
import LocationInput from "../../components/base/inputs/LocationInput.vue";
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
    LocationInput,
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
    const handleKeyDown = (e) => {
      // enter key
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return {
      countryTypes: data.countryTypes,
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
  data() {
    return {
      selectedCountry: data.countryTypes[0],
      selectedMortgageTypes: [],
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
        if (index === currentIdx + 1 && step.status !== "hidden") {
          return {
            ...step,
            status: "current",
          };
        }
        return step;
      });
      if (id === "initial-questions") {
        const choseLess = this.selectedMortgageTypes.some(
          (type) => type === "commercial-less-3"
        );
        const choseGreater = this.selectedMortgageTypes.some(
          (type) => type === "commercial-greater-3"
        );
        if (choseLess && choseGreater) {
          newSteps[2].status = "current";
          newSteps[3].status = "upcoming";
        } else if (choseGreater && !choseLess) {
          newSteps[2].status = "hidden";
          newSteps[3].status = "current";
        } else if (choseLess) {
          newSteps[2].status = "current";
          newSteps[3].status = "hidden";
        }
      }
      this.onStepsChange(newSteps);
    },
    onMortgageChange(e) {
      const { id, checked } = e.target;
      console.log(id, checked);
      if (checked) {
        this.selectedMortgageTypes.push(id);
      } else {
        this.selectedMortgageTypes = this.selectedMortgageTypes.filter(
          (mortgageType) => mortgageType !== id
        );
      }
    },
  },
};
</script>

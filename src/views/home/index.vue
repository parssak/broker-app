<template>
  <Container class="bg-gray-100">
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside
        class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 relative w-full"
      >
        <nav class="space-y-1 top-10 w-full sticky">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white'
                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
              'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <component
              :is="item.icon"
              :class="[
                item.current
                  ? 'text-indigo-500 group-hover:text-indigo-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
              ]"
              aria-hidden="true"
            />
            <span class="truncate">
              {{ item.name }}
            </span>
          </a>
        </nav>
      </aside>

      <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <!-- Initial Broker Questions -->
        <Form title="Initial Broker Questions" description=" ">
          <div class="form-full">
            <RadioListSimple
              title="Mortgage Deal Type"
              :items="mortgageTypes"
            />
          </div>
        </Form>

        <!-- Add to Ledgers Questions -->
        <Form title="Add to Ledgers Questions" description=" ">
          <div class="form-full">
            <CheckListSimple
              title="Mortgage Deal Type"
              :items="mortgageTypes"
            />
          </div>
        </Form>

        <!-- Mortgage Lending Criteria < $3M -->
        <Form title="Mortgage Lending Criteria < $3M" description=" ">
          <div class="form-full w-2/3">
            <TextInput label="Property Location(s)" />
          </div>

          <div
            class="form-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            <div class="w-full space-y-6">
              <CheckListSimple
                title="Term Lengths"
                :items="termLengths"
                description="Select all that apply"
              />
            </div>
            <div class="w-full space-y-6">
              <CheckListSimple title="Charges Offered" :items="chargeTypes" />

              <SelectInput label="Property Style" :items="propertyStyles" />
            </div>
          </div>

          <div
            class="form-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            <div class="space-y-6">
              <TextInput type="number" label="Minimum Square Footage" />
              <TextInput type="number" label="Maximum Square Footage" />
              <RadioListSimple title="Location" :items="locations" />
              <RadioListSimple title="Air-Conditioning" :items="acOptions" />
              <RadioListSimple title="Water" :items="waterOptions" />
              <RadioListSimple title="Heating" :items="heatOptions" />
              <RadioListSimple title="Sewage" :items="sewageOptions" />
            </div>

            <div class="space-y-6">
              <CheckListSimple
                title="Loan Types Offered"
                :items="loanTypes"
                description="Select all that apply"
              />
              <CheckListSimple
                title="Allowable Loan Purposes"
                :items="loanPurposes"
                description="Select all that apply"
              />
              <MoneyInput label="Minimum Loan Amount" />
              <MoneyInput label="Maximum Loan Amount" />
              <TextInput type="number" label="Maximum LTV (Loan-To-Value)" />

              <SwitchWithLabel label="Collateral/Blanket Charges" />
              <SwitchWithLabel
                label="Non-Resident Corporation - Borrowers(s)"
              />
              <SwitchWithLabel
                label="Non-Citizen/Permanent Resident - Any Directors & Officers:"
              />

              <TextInput type="number" label="Maximum GDS" />
              <TextInput type="number" label="Maximum TDS" />
            </div>
          </div>

          <div class="form-full space-y-6">
            <CheckListSimple title="Bankruptcy" :items="bankruptcyOptions" />
            <CheckListSimple title="Consumer" :items="consumerOptions" />
          </div>

          <div class="form-full mt-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Environmental Report(s), Reliance Letter(s) & Peer Review(s)
            </h3>
          </div>

          <div
            class="form-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            <div class="space-y-6">
              <!-- Environmental Site Assessment (ESA) for the Property? -->
              <RadioListSimple
                title="Environmental Site Assessment (ESA) for the Property?"
                :items="esaOptions"
                itemsName="esa"
              />
              <!-- Peer Review of ESA -->
              <RadioListSimple
                title="Peer Review of ESA"
                :items="esaReviewOptions"
                itemsName="esa-review"
              />
            </div>
            <div class="space-y-6">
              <!-- Environmental Reliance Letter (ERL) for the Property? -->
              <RadioListSimple
                title="Environmental Reliance Letter (ERL) for the Property?"
                :items="erlOptions"
                itemsName="erl"
              />
              <!-- Peer Review of ERL -->
              <RadioListSimple
                title="Peer Review of ERL"
                :items="erlReviewOptions"
                itemsName="erl-review"
              />
            </div>
          </div>

          <!-- Geotechnical Report(s) & Peer Review(s) -->
          <div class="form-full mt-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Geotechnical Report(s) & Peer Review(s)
            </h3>
          </div>

          <div
            class="form-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            <div class="space-y-6">
              <!-- Geotechnical Report (GR) for the Property -->
              <RadioListSimple
                title="Geotechnical Report (GR) for the Property"
                :items="grOptions"
                itemsName="gr"
              />
              <!-- Peer Review of GR -->
              <RadioListSimple
                title="Peer Review of GR"
                :items="grReviewOptions"
                itemsName="gr-review"
              />
            </div>

            <div class="space-y-6">
              <!-- Geotechnical Reliance Letter (GRL) for the Property -->
              <RadioListSimple
                title="Geotechnical Reliance Letter (GRL) for the Property"
                :items="grlOptions"
                itemsName="grl"
              />
              <!-- Peer Review of GRL -->
              <RadioListSimple
                title="Peer Review of GRL"
                :items="grlReviewOptions"
                itemsName="grl-review"
              />
            </div>
          </div>

          <!-- Appraisal Report(s) & Peer Review(s) -->
          <div class="form-full mt-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Appraisal Report(s) & Peer Review(s)
            </h3>
          </div>

          <div
            class="form-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            <div class="space-y-6">
              <!-- Appraisal Report (AR) for the Property -->
              <RadioListSimple
                title="Appraisal Report (AR) for the Property"
                :items="arOptions"
                itemsName="ar"
              />
              <!-- Peer Review of AR -->
              <RadioListSimple
                title="Peer Review of AR"
                :items="arReviewOptions"
                itemsName="ar-review"
              />
            </div>

            <div class="space-y-6">
              <!-- Appraisal Reliance Letter (ARL) for the Property -->
              <RadioListSimple
                title="Appraisal Reliance Letter (ARL) for the Property"
                :items="arlOptions"
                itemsName="arl"
              />
              <!-- Peer Review of ARL -->
              <RadioListSimple
                title="Peer Review of ARL"
                :items="arlReviewOptions"
                itemsName="arl-review"
              />
            </div>
          </div>

          <div
            class="form-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            <div class="space-y-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Survey(s)
              </h3>
              <!-- Current Survey for the Property -->
              <RadioListSimple
                title="Current Survey for the Property"
                :items="surveyOptions"
                itemsName="survey"
              />
            </div>

            <div class="space-y-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Market Research & Analysis
              </h3>
              <!-- Market Research & Analysis of the Property -->
              <RadioListSimple
                title="Market Research & Analysis of the Property"
                :items="marketOptions"
                itemsName="market"
              />
            </div>
          </div>

          <!-- Insurance -->
          <div class="form-full mt-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Insurance
            </h3>
          </div>

          <div
            class="form-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            <div class="space-y-6">
              <RadioListSimple
                title="Insurance Policies for the Property"
                :items="insuranceOptions"
                itemsName="insurance"
              />
            </div>

            <div class="space-y-6">
              something else
              <!-- <RadioListSimple
                title="Insurance for the Property"
                :items="insuranceOptions"
              /> -->
            </div>
          </div>
        </Form>
      </div>
    </div>
  </Container>
</template>

<script>
import SwitchWithLabel from "../../components/base/inputs/SwitchWithLabel.vue";
import MoneyInput from "../../components/base/inputs/MoneyInput.vue";
import SelectInput from "../../components/base/inputs/SelectInput.vue";
import TextInput from "../../components/base/inputs/TextInput.vue";
import CheckListSimple from "../../components/base/inputs/CheckListSimple.vue";
import RadioListSimple from "../../components/base/inputs/RadioListSimple.vue";
import FileInput from "../../components/base/inputs/FileInput.vue";
import Form from "../../components/app/Form.vue";
import Container from "../../components/layouts/Container.vue";
import {
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/vue/outline";

const navigation = [
  { name: "Account", href: "#", icon: UserCircleIcon, current: true },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Plan & Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Team", href: "#", icon: UserGroupIcon, current: false },
  { name: "Integrations", href: "#", icon: ViewGridAddIcon, current: false },
];

const mortgageTypes = [
  { id: "residential", label: "Residential" },
  {
    id: "commercial-less-3",
    label: "Commercial &/or Construction (Less than $3 million total value)",
  },
  {
    id: "commerial-more-3",
    label: "Commercial &/or Construction (More than $3 million total value)",
  },
];

const chargeTypes = [
  { id: "charge-1st", label: "1st" },
  { id: "charge-2nd", label: "2nd" },
  { id: "charge-3rd", label: "3rd" },
  { id: "charge-bridge", label: "Bridge" },
];

const termLengths = [
  { id: "term-1yr", label: "1 year" },
  { id: "term-18m", label: "18 months" },
  { id: "term-3yr", label: "3 years" },
  { id: "term-5yr", label: "5 years" },
  { id: "term-10yr", label: "10 years" },
  { id: "term-25yr", label: "25 years" },
  { id: "term-30yr", label: "30 years" },
  { id: "term-other", label: "Other" },
];

const propertyStyles = [
  {
    id: "industrial-manufacturing-facility",
    label: "Industrial - Manufacturing Facility",
  },
  {
    id: "industrial-warehouse/distribution-facility",
    label: "Industrial - Warehouse/Distribution Facility",
  },
  {
    id: "industrial-flex/multi-purpose-facility",
    label: "Industrial - Flex/Multi-Purpose Facility",
  },
  {
    id: "retail-enclosed shopping mall",
    label: "Retail - Enclosed Shopping Mall",
  },
  {
    id: "retail-shopping plaza or strip mall",
    label: "Retail - Shopping Plaza or Strip Mall",
  },
  {
    id: "retail-pad/standalone building",
    label: "Retail - Pad/Standalone Building",
  },
  { id: "office-office building", label: "Office - Office Building" },
  { id: "office-suite or condominium", label: "Office - Suite or Condominium" },
  {
    id: "office-professional suites (dental, medical, legal, etc.)",
    label: "Office - Professional Suites (Dental, Medical, Legal, etc.)",
  },
  {
    id: "multi-family residential units (mfru) - condominiums,",
    label: "Multi-Family Residential Units (MFRU) - Condominiums,",
  },
  {
    id: "apartment buildings, commercial/offices",
    label: "Apartment Buildings, Commercial/Offices",
  },
  {
    id: "multi-dwelling unit (mdu) - townhomes, condominiums,",
    label: "Multi-Dwelling Unit (MDU) - Townhomes, Condominiums,",
  },
  { id: "apartment buildings", label: "Apartment Buildings" },
  { id: "residential homes/estates", label: "Residential Homes/Estates" },
  { id: "hotel & lodging", label: "Hotel & Lodging" },
  { id: "restaurant", label: "Restaurant" },
  { id: "cottage", label: "Cottage" },
  { id: "land", label: "Land" },
];

const locations = [
  { id: "urban", label: "Urban" },
  { id: "rural", label: "Rural" },
  { id: "either", label: "Either" },
];

const acOptions = [
  { id: "ac-yes", label: "Yes" },
  { id: "ac-no", label: "No" },
  { id: "ac-not-relevant", label: "Not relevant" },
];

const waterOptions = [
  { id: "water-municipal", label: "Municipal" },
  { id: "water-well", label: "Well Water" },
  { id: "water-either", label: "Either" },
];

const heatOptions = [
  { id: "heat-forced-air", label: "Forced Air/Furnace" },
  { id: "heat-oil", label: "Heating Oil" },
  { id: "heat-propane", label: "Propane" },
  { id: "heat-any", label: "Any" },
];

const sewageOptions = [
  { id: "sewage-municipal", label: "Municipal" },
  { id: "sewage-septic", label: "Septic" },
  { id: "sewage-either", label: "Either" },
];

const loanTypes = [
  { id: "loan-interest-only", label: "Interest Only" },
  { id: "loan-amortized", label: "Amortized" },
  { id: "loan-closed", label: "Closed" },
  { id: "loan-open", label: "Open" },
];

const bankruptcyOptions = [
  {
    id: "bankruptcy-previous",
    label: "Previous Bankruptcy",
    description: "(Any Borrowers/Officers/Directors/Officers)",
  },
  {
    id: "bankruptcy-current",
    label: "Current Bankruptcy",
    description: "(Any Borrowers/Officers/Directors/Officers)",
  },
];

const consumerOptions = [
  {
    id: "consumer-previous",
    label: "Previous Consumer Proposal",
    description: "(Any Borrowers/Officers/Directors/Officers)",
  },
  {
    id: "consumer-current",
    label: "Current Consumer Proposal",
    description: "(Any Borrowers/Officers/Directors/Officers)",
  },
];

/**
 * 
 * Debt Consolidation
 		Investment
Improvements (minor)
Renovation (major)
Purchase Land Only
Purchase Land with Existing Structure
Construction
Purchase + Construction
Mortgage Arrears 
Other 
 */

const allowableLoanPurposes = [
  { id: "loan-purpose-investment", label: "Investment" },
  { id: "loan-purpose-improvements", label: "Improvements (minor)" },
  { id: "loan-purpose-renovation", label: "Renovation (major)" },
  { id: "loan-purpose-purchase-land-only", label: "Purchase Land Only" },
  {
    id: "loan-purpose-purchase-land-with-existing-structure",
    label: "Purchase Land with Existing Structure",
  },
  { id: "loan-purpose-construction", label: "Construction" },
  {
    id: "loan-purpose-purchase-plus-construction",
    label: "Purchase + Construction",
  },
  { id: "loan-purpose-mortgage-arrears", label: "Mortgage Arrears" },
  { id: "loan-purpose-other", label: "Other" },
];

const getProvidedOptions = (identifier) => {
  return [
    { id: `${identifier}-must-be-provided`, label: "Must be provided" },
    {
      id: `${identifier}-needed-future`,
      label: "Will need to be provided in the future",
    },
    { id: `${identifier}-either`, label: "Either" },
  ];
};

const esaOptions = getProvidedOptions("esa");
const esaReviewOptions = getProvidedOptions("esaReview");
const erlOptions = getProvidedOptions("erl");
const erlReviewOptions = getProvidedOptions("erlReview");
const grOptions = getProvidedOptions("gr");
const grReviewOptions = getProvidedOptions("grReview");
const grlOptions = getProvidedOptions("grl");
const grlReviewOptions = getProvidedOptions("grlReview");
const arOptions = getProvidedOptions("ar");
const arReviewOptions = getProvidedOptions("arReview");
const arlOptions = getProvidedOptions("arl");
const arlReviewOptions = getProvidedOptions("arlReview");
const surveyOptions = getProvidedOptions("survey");
const marketOptions = getProvidedOptions("market");
const insuranceOptions = getProvidedOptions("insurance");

export default {
  components: {
    Container,
    Form,
    FileInput,
    RadioListSimple,
    CheckListSimple,
    TextInput,
    SelectInput,
    MoneyInput,
    SwitchWithLabel,
  },
  setup() {
    return {
      navigation,
      mortgageTypes,
      chargeTypes,
      termLengths,
      propertyStyles,
      locations,
      acOptions,
      waterOptions,
      heatOptions,
      sewageOptions,
      loanTypes,
      allowableLoanPurposes,
      bankruptcyOptions,
      consumerOptions,
      esaOptions,
      esaReviewOptions,
      erlOptions,
      erlReviewOptions,
      grOptions,
      grReviewOptions,
      grlOptions,
      grlReviewOptions,
      arOptions,
      arReviewOptions,
      arlOptions,
      arlReviewOptions,
      surveyOptions,
      marketOptions,
      insuranceOptions,
    };
  },
};
</script>

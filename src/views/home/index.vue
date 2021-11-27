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
            <SwitchWithLabel
              label="Previous Bankruptcy"
              secondaryLabel=" (Any Borrowers/Officers/Directors/Officers)"
            />
            <SwitchWithLabel
              label="Current Bankruptcy"
              secondaryLabel=" (Any Borrowers/Officers/Directors/Officers)"
            />
            <SwitchWithLabel
              label="Previous Consumer Proposal"
              secondaryLabel=" (Any
            Borrowers/Officers/Directors/Officers)"
            />
            <SwitchWithLabel
              label="Current Consumer Proposal"
              secondaryLabel=" (Any
            Borrowers/Officers/Directors/Officers)"
            />
          </div>
          <div class="form-full">
            <div class="todo font-mono">
              Environment + appraisal report, surveys, etc...
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
    };
  },
};
</script>

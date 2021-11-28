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
              itemsName="mortgages"
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
            <Input label="Property Location(s)" />
          </div>

          <fieldset class="form-full grid grid-cols-2 gap-y-6">
            <div class="w-full space-y-6">
              <CheckListSimple
                title="Term Lengths"
                :items="termLengths"
                description="Select all that apply"
              />
            </div>
            <div class="w-full space-y-6">
              <CheckListSimple
                title="Charges Offered"
                :items="chargeTypes"
                description="Select all that apply"
              />
            </div>
          </fieldset>

          <fieldset class="form-full grid gap-y-6">
            <div class="space-y-6">
              <SelectInput label="Property Style" :items="propertyStyles" />
              <Input type="number" label="Minimum Square Footage" />
              <Input type="number" label="Maximum Square Footage" />
              <div class="grid md:grid-cols-2 gap-6">
                <RadioListSimple
                  itemsName="location"
                  title="Location"
                  :items="locations"
                />
                <RadioListSimple
                  itemsName="air"
                  title="Air-Conditioning"
                  :items="acOptions"
                />
                <div class="space-y-6">
                  <RadioListSimple
                    itemsName="water"
                    title="Water"
                    :items="waterOptions"
                  />
                  <RadioListSimple
                    itemsName="sewage"
                    title="Sewage"
                    :items="sewageOptions"
                  />
                </div>
                <RadioListSimple
                  itemsName="heating"
                  title="Heating"
                  :items="heatOptions"
                />
              </div>
            </div>

            <fieldset class="space-y-6">
              <CheckListSimple
                title="Loan Types Offered"
                :items="loanTypes"
                description="Select all that apply"
              />
              <CheckListSimple
                title="Allowable Loan Purposes"
                :items="allowableLoanPurposes"
                description="Select all that apply"
              />
              <MoneyInput label="Minimum Loan Amount" />
              <MoneyInput label="Maximum Loan Amount" />
              <Input type="number" label="Maximum LTV (Loan-To-Value)" />

              <SwitchWithLabel label="Collateral/Blanket Charges" />
              <SwitchWithLabel
                label="Non-Resident Corporation - Borrowers(s)"
              />
              <SwitchWithLabel
                label="Non-Citizen/Permanent Resident - Any Directors & Officers:"
              />

              <Input type="number" label="Maximum GDS" />
              <Input type="number" label="Maximum TDS" />
            </fieldset>
          </fieldset>

          <fieldset class="form-full space-y-6">
            <CheckListSimple title="Bankruptcy" :items="bankruptcyOptions" />
            <CheckListSimple title="Consumer" :items="consumerOptions" />
          </fieldset>

          <Fieldset
            title="Environmental Report(s), Reliance Letter(s) & Peer Review(s)"
          >
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
          </Fieldset>

          <Fieldset title="Geotechnical Report(s) & Peer Review(s)">
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
          </Fieldset>

          <Fieldset title="Appraisal Report(s) & Peer Review(s)">
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
          </Fieldset>

          <hr class="form-full relative top-4" />

          <!-- Survey(s) -->
          <div class="form-full">
            <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">
              Survey(s)
            </h3> -->
          </div>
          <fieldset class="form-full grid gap-y-6">
            <div class="space-y-6">
              <!-- Current Survey for the Property -->
              <RadioListSimple
                title="Current Survey for the Property"
                :items="surveyOptions"
                itemsName="survey"
              />
            </div>

            <div class="space-y-6">
              <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">
                Market Research & Analysis
              </h3> -->
              <!-- Market Research & Analysis of the Property -->
              <RadioListSimple
                title="Market Research & Analysis of the Property"
                :items="marketOptions"
                itemsName="market"
              />
            </div>
          </fieldset>

          <fieldset class="form-full grid gap-y-6">
            <div class="space-y-6">
              <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">
                Insurance
              </h3> -->
              <RadioListSimple
                title="Insurance Policies for the Property"
                :items="insuranceOptions"
                itemsName="insurance"
              />
            </div>

            <div class="space-y-6">
              <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">
                Project Drawings
              </h3> -->
              <RadioListSimple
                title="Project Drawings for the Property"
                :items="drawingOptions"
                itemsName="drawing"
              />
            </div>
          </fieldset>

          <fieldset class="form-full grid gap-y-6">
            <div class="space-y-6">
              <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">
                Property Taxes
              </h3> -->
              <RadioListSimple
                title="Property Taxes current (paid) for the Property"
                :items="propertyTaxOptions"
                itemsName="property-tax"
              />
            </div>

            <div class="space-y-6">
              <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">
                Title Searches
              </h3> -->
              <RadioListSimple
                title="Title Searches for the Property"
                :items="titleSearchOptions"
                itemsName="title-search"
              />
            </div>
          </fieldset>

          <fieldset class="form-full grid gap-y-6">
            <div class="space-y-6">
              <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">
                Project Budget/Proforma
              </h3> -->
              <RadioListSimple
                title="Budget or Financial Proforma for the Property"
                :items="projectBudgetOptions"
                itemsName="project-budget"
              />
            </div>

            <div class="space-y-6">
              <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">
                Title Insurance
              </h3> -->
              <RadioListSimple
                title="Title Insurance for the Property"
                :items="titleInsuranceOptions"
                itemsName="title-insurance"
              />
            </div>
          </fieldset>

          <div class="form-full">
            <div class="w-2/3 space-y-6">
              <Input label="Any Brokers/Brokerages Not Allowed" />
              <Input label="Any Preferred Brokers/Brokerages" />
            </div>
          </div>
        </Form>

        <!-- Commercial Mortgage App < $3M -->
        <Form title="Commercial Mortgage App < $3M" description=" ">
          <div class="grid md:grid-cols-2 form-full gap-y-6 gap-x-12">
            <Input label="Name of Project" class="md:w-2/3" />
            <Input
              label="Date of Mortgage Application"
              type="date"
              class="md:w-2/3"
            />
          </div>

          <Fieldset title="Borrowers" class="form-full">
            <SwitchWithLabel
              label="Is there more than 1 borrower?"
              @change="onMultiBorrowerChange"
            />
            <Input
              label="Number of borrowers"
              class="md:w-2/3"
              type="number"
              v-if="multiBorrower"
              :min="1"
              :defaultValue="1"
              @change="onBorrowerCountChange"
            />

            <div
              :class="`space-y-6 ${b.hidden && 'hidden'}`"
              v-for="(b, index) in borrowers"
              :key="b"
            >
              <h3 class="text-lg leading-6">Borrower {{ index + 1 }}</h3>
              <Input
                label="Name"
                class="md:w-2/3"
                @change="
                  (event) =>
                    this.onBorrowerFieldChange(
                      event.target.value,
                      'name',
                      index
                    )
                "
              />
              <Input
                label="Incorporation Jurisdiction of Borrower"
                class="md:w-2/3"
                placeholder="TODO: Make this Country & Province/State dropdowns"
              />
              <Input label="Address of Borrower" class="md:w-2/3" />
              <Input
                label="Name of Primary Contact with Borrower"
                class="md:w-2/3"
              />
              <Input
                label="Primary Contact's Email Address"
                type="email"
                class="md:w-2/3"
              />
              <Input
                label="Primary Contact's Mobile Telephone Number"
                type="email"
                class="md:w-2/3"
              />
              <Input
                label="Credit Score of Borrower"
                class="md:w-2/3"
                type="number"
              />
              <RadioListSimple
                title="Source of Credit Score of Borrower"
                :items="creditScoreOptions"
                itemsName="credit-score"
              />
              <RadioListSimple
                title="Preferred Method of Contacting the Primary Contact for Borrower"
                :items="contactMethodOptions"
                itemsName="contact-method"
              />

              <FileInput label="Copy of Borrower's Incorporation Certificate" />
              <FileInput
                label="Copy of Borrower's Incorporation Articles & Bylaws"
              />
              <FileInput
                label="Copy of Borrower's Incorporation Certification of Status"
              />
            </div>
          </Fieldset>

          <!-- Banking Information -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Banking Information
            </h3>
            <fieldset class="form-full space-y-6">
              <legend class="sr-only">Banking Information</legend>
              <div
                v-for="(b, index) in borrowers"
                :key="index"
                class="space-y-6"
              >
                <h3 class="text-lg leading-6">
                  Banking Information for
                  {{ b.name || `Borrower ${index + 1}` }}
                </h3>
                <Input
                  label="Bank Name"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onBorrowerFieldChange(
                        event.target.value,
                        'bankName',
                        index
                      )
                  "
                />
                <Input
                  label="Bank Address"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onBorrowerFieldChange(
                        event.target.value,
                        'bankAddress',
                        index
                      )
                  "
                />
                <!-- Number of years with bank -->
                <Input
                  label="Number of years with bank"
                  class="md:w-2/3"
                  type="number"
                  @change="
                    (event) =>
                      this.onBorrowerFieldChange(
                        event.target.value,
                        'bankYears',
                        index
                      )
                  "
                />
                <!-- Primary Contact with Bank -->
                <Input
                  label="Name of Primary Contact with Bank"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onBorrowerFieldChange(
                        event.target.value,
                        'bankContact',
                        index
                      )
                  "
                />
                <Input
                  label="Primary Contact's Email Address"
                  type="email"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onBorrowerFieldChange(
                        event.target.value,
                        'bankEmail',
                        index
                      )
                  "
                />
                <Input
                  label="Primary Contact's Mobile Telephone Number"
                  type="email"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onBorrowerFieldChange(
                        event.target.value,
                        'bankPhone',
                        index
                      )
                  "
                />
                <Input
                  label="Bank Account Number"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onBorrowerFieldChange(
                        event.target.value,
                        'bankAccount',
                        index
                      )
                  "
                />

                <RadioListSimple
                  title="Preferred Method of Contacting the Primary Contact"
                  :items="bankContactMethods"
                  itemsName="bank-contact-method"
                />

                <div class="todo">Additional Bank Account</div>
              </div>
            </fieldset>
          </div>

          <!-- Officers, Directors, & Shareholders -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Officers, Directors, & Shareholders
            </h3>
            <fieldset class="form-full space-y-6">
              <legend class="sr-only">
                Officers, Directors, & Shareholders
              </legend>
              <div
                v-for="(b, index) in borrowers"
                :key="index"
                class="space-y-6"
              >
                <h3 class="text-lg leading-6">
                  Officers, Directors, & Shareholders for
                  {{ b.name || `Borrower ${index + 1}` }}
                </h3>

                <RadioListSimple
                  title="Individual Role"
                  :items="roles"
                  itemsName="role"
                  @change="
                    (event) =>
                      this.onIndividualFieldChange(
                        event.target.value,
                        'role',
                        index
                      )
                  "
                />

                <Input
                  label="Name"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onIndividualFieldChange(
                        event.target.value,
                        'name',
                        index
                      )
                  "
                />

                <!-- Residency -->
                <RadioListSimple
                  title="Residency"
                  :items="residencyOptions"
                  itemsName="residency"
                  @change="
                    (event) =>
                      this.onIndividualFieldChange(
                        event.target.value,
                        'residency',
                        index
                      )
                  "
                />

                <!-- Salutations -->
                <RadioListSimple
                  title="Salutations"
                  :items="salutations"
                  itemsName="salutation"
                  @change="
                    (event) =>
                      this.onIndividualFieldChange(
                        event.target.value,
                        'salutation',
                        index
                      )
                  "
                />

                <!-- dob -->
                <Input
                  label="Date of Birth"
                  class="md:w-2/3"
                  type="date"
                  @change="
                    (event) =>
                      this.onIndividualFieldChange(
                        event.target.value,
                        'dob',
                        index
                      )
                  "
                />

                <!-- Credit Score -->
                <Input
                  label="Credit Score"
                  class="md:w-2/3"
                  type="number"
                  @change="
                    (event) =>
                      this.onIndividualFieldChange(
                        event.target.value,
                        'creditScore',
                        index
                      )
                  "
                />

                <!-- Source of Credit Score -->
                <RadioListSimple
                  title="Source of Credit Score"
                  :items="creditScoreSources"
                  itemsName="credit-score-source"
                  @change="
                    (event) =>
                      this.onIndividualFieldChange(
                        event.target.value,
                        'creditScoreSource',
                        index
                      )
                  "
                />
              </div>
            </fieldset>
          </div>

          <!-- Employment Information -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Employment Information
            </h3>
          </div>

          <!-- Net Worth Statements -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Net Worth Statements
            </h3>
          </div>

          <!-- Information Regarding the Property Requiring a Mortgage -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Information Regarding the Property Requiring a Mortgage
            </h3>
          </div>

          <!-- Taxes and Expenses -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Taxes and Expenses
            </h3>
          </div>

          <!-- Mortgage Requested -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Mortgage Requested
            </h3>
          </div>

          <!-- Down Payment and/or Capital Previously Contributed to Property -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Down Payment and/or Capital Previously Contributed to Property
            </h3>
          </div>

          <!-- Current Mortgage(s) -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Current Mortgage(s)
            </h3>
          </div>

          <!-- Environmental Report(s) -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Environmental Report(s)
            </h3>
          </div>

          <!-- Geotechnical Report(s) -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Geotechnical Report(s)
            </h3>
          </div>

          <!-- Appraisal Report(s) -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Appraisal Report(s)
            </h3>
          </div>

          <!-- Survey(s) -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Survey(s)
            </h3>
          </div>

          <!-- Market Research and Analysis -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Market Research and Analysis
            </h3>
          </div>

          <!-- Insurance -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Insurance
            </h3>
          </div>

          <!-- Project Drawings -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Project Drawings
            </h3>
          </div>

          <!-- Title Searches -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Title Searches
            </h3>
          </div>

          <!-- Property Taxes -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Property Taxes
            </h3>
          </div>

          <!-- Project Budget/Proforma -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Project Budget/Proforma
            </h3>
          </div>

          <!-- Title Insurance -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Title Insurance
            </h3>
          </div>

          <!-- Deal Documents -->
          <div class="form-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Deal Documents
            </h3>
          </div>
          <div class="form-full">
            <FileInput class="w-full" label="Deal Documents" />
          </div>
        </Form>
      </div>
    </div>
  </Container>
</template>

<script>
import Fieldset from "../../components/app/Fieldset.vue";
import NumberInput from "../../components/base/inputs/NumberInput.vue";
import SwitchWithLabel from "../../components/base/inputs/SwitchWithLabel.vue";
import MoneyInput from "../../components/base/inputs/MoneyInput.vue";
import SelectInput from "../../components/base/inputs/SelectInput.vue";
import Input from "../../components/base/inputs/Input.vue";
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
const drawingOptions = getProvidedOptions("project");
const propertyTaxOptions = getProvidedOptions("propertyTax");
const titleSearchOptions = getProvidedOptions("titleSearch");
const projectBudgetOptions = getProvidedOptions("projectBudget");
const titleInsuranceOptions = getProvidedOptions("titleInsurance");

// Commercial Broker Options

const defaultBorrower = {
  name: "",
  hidden: false,
  bankName: "",
  bankAddress: "",
  bankYears: "",
  bankContact: "",
  bankEmail: "",
  bankPhone: "",
  bankAccount: "",
};

const creditScoreOptions = [
  { id: "equifax", label: "Equifax" },
  { id: "transunion", label: "Transunion" },
  { id: "transperion, transunion", label: "Transperion" },
  { id: "other", label: "Other" },
];

const contactMethodOptions = [
  { id: "home-business-phone", label: "Home/Business Phone" },
  { id: "cell-phone", label: "Cell Phone" },
  { id: "text", label: "Text Message" },
  { id: "email", label: "Email" },
];

const bankContactMethods = [
  { id: "bank-business-phone", label: "Home/Business Phone" },
  { id: "bank-cell-phone", label: "Cell Phone" },
  { id: "bank-text", label: "Text Message" },
  { id: "bank-email", label: "Email" },
];

const roles = [
  { id: "role-officer", label: "Officer" },
  { id: "role-director", label: "Director" },
  { id: "role-officer-director", label: "Officer/Director" },
  { id: "role-shareholder", label: "Shareholder" },
];

const residencyTypes = [
  { id: "residency-citizen", label: "Citizen" },
  { id: "residency-permanent-resident", label: "Permanent Resident" },
  { id: "residency-non-resident", label: "Non-Resident" },
];

const salutationTypes = [
  { id: "salutation-mr", label: "Mr" },
  { id: "salutation-mrs", label: "Mrs" },
  { id: "salutation-ms", label: "Ms" },
  { id: "salutation-dr", label: "Dr" },
];

const defaultIndividual = {
  name: "",
  hidden: false,
  role: "role-officer",
  salutation: "salutation-mr",
  residency: "residency-citizen",
  dob: "",
  creditScore: "",
  creditScoreSource: "",
  creditScoreSourceOther: "",
};

export default {
  components: {
    Container,
    Form,
    FileInput,
    RadioListSimple,
    CheckListSimple,
    Input,
    SelectInput,
    MoneyInput,
    SwitchWithLabel,
    NumberInput,
    Fieldset,
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
      drawingOptions,
      propertyTaxOptions,
      titleSearchOptions,
      projectBudgetOptions,
      titleInsuranceOptions,

      // Commercial Broker Options
      creditScoreOptions,
      contactMethodOptions,
      bankContactMethods,
      roles,
      residencyTypes,
      salutationTypes,
    };
  },
  data() {
    return {
      multiBorrower: false,
      borrowers: [{ ...defaultBorrower }],
      individuals: [{ ...defaultIndividual }],
    };
  },
  methods: {
    onBorrowerFieldChange(value, field, index) {
      if (this.borrowers.length <= index) {
        return;
      }
      this.borrowers[index][field] = value;
    },
    onIndividualFieldChange(value, field, index) {
      if (this.individuals.length <= index) {
        return;
      }
      this.individuals[index][field] = value;
    },
    onMultiBorrowerChange(value) {
      this.multiBorrower = value;
      if (!value) {
        this.handleBorrowerCountChange(1);
      }
    },
    onBorrowerCountChange(event) {
      const count = event.target.value;
      this.handleBorrowerCountChange(count);
    },
    handleBorrowerCountChange(count) {
      if (count > this.borrowers.length) {
        for (let i = this.borrowers.length; i < count; i++) {
          this.borrowers.push({ ...defaultBorrower });
        }
      } else if (count < this.borrowers.length) {
        // Hide all borrowers instead of splicing in case we
        // want to keep the information.
        //
        // If we opt to have the information removed, we can
        // just splice the array instead.
        //
        // e.g. this.borrowers.splice(count, this.borrowers.length - count);
        this.borrowers.forEach((borrower, index) => {
          if (index >= count) {
            borrower.hidden = true;
          }
        });
      }
    },
  },
};
</script>

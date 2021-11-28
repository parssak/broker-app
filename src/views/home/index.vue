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
          <RadioListSimple
            title="Mortgage Deal Type"
            :items="mortgageTypes"
            itemsName="mortgages"
          />
        </Form>

        <!-- Add to Ledgers Questions -->
        <Form title="Add to Ledgers Questions" description=" ">
          <CheckListSimple title="Mortgage Deal Type" :items="mortgageTypes" />
        </Form>

        <!-- Mortgage Lending Criteria < $3M -->
        <Form title="Mortgage Lending Criteria < $3M" description=" ">
          <Input label="Property Location(s)" class="md:w-2/3" />

          <fieldset class="grid grid-cols-2 gap-y-6">
            <CheckListSimple
              title="Term Lengths"
              :items="termLengths"
              description="Select all that apply"
            />
            <CheckListSimple
              title="Charges Offered"
              :items="chargeTypes"
              description="Select all that apply"
            />
          </fieldset>

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

          <!-- Survey(s) -->
          <Fieldset>
            <RadioListSimple
              title="Current Survey for the Property"
              :items="surveyOptions"
              itemsName="survey"
            />

            <RadioListSimple
              title="Market Research & Analysis of the Property"
              :items="marketOptions"
              itemsName="market"
            />
          </Fieldset>

          <Fieldset>
            <RadioListSimple
              title="Insurance Policies for the Property"
              :items="insuranceOptions"
              itemsName="insurance"
            />

            <RadioListSimple
              title="Project Drawings for the Property"
              :items="drawingOptions"
              itemsName="drawing"
            />
          </Fieldset>

          <Fieldset>
            <RadioListSimple
              title="Property Taxes current (paid) for the Property"
              :items="propertyTaxOptions"
              itemsName="property-tax"
            />
            <RadioListSimple
              title="Title Searches for the Property"
              :items="titleSearchOptions"
              itemsName="title-search"
            />
          </Fieldset>

          <Fieldset>
            <RadioListSimple
              title="Budget or Financial Proforma for the Property"
              :items="projectBudgetOptions"
              itemsName="project-budget"
            />
            <RadioListSimple
              title="Title Insurance for the Property"
              :items="titleInsuranceOptions"
              itemsName="title-insurance"
            />
          </Fieldset>

          <Input label="Any Brokers/Brokerages Not Allowed" class="md:w-2/3" />
          <Input label="Any Preferred Brokers/Brokerages" class="md:w-2/3" />
        </Form>

        <!-- Commercial Mortgage App < $3M -->
        <Form title="Commercial Mortgage App < $3M" description=" ">
          <div class="grid md:grid-cols-2 gap-y-6 gap-x-12">
            <Input label="Name of Project" class="md:w-2/3" />
            <Input
              label="Date of Mortgage Application"
              type="date"
              class="md:w-2/3"
            />
          </div>

          <Fieldset title="Borrowers">
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

          <Fieldset title="Banking Information">
            <div v-for="(b, index) in borrowers" :key="index" class="space-y-6">
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
          </Fieldset>

          <Fieldset title="Officers, Directors, & Shareholders">
            <div v-for="(b, index) in borrowers" :key="index" class="space-y-6">
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
                    this.onIndividualFieldChange(event.target.id, 'role', index)
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
                      event.target.id,
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
                      event.target.id,
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
                      event.target.id,
                      'creditScoreSource',
                      index
                    )
                "
              />

              <!-- If shareholder, what percentage of shares of Borrower 1 are held? -->
              <Input
                label="What percentage of shares of Borrower are held?"
                v-if="b.role === 'role-shareholder'"
                class="md:w-2/3"
                type="number"
                @change="
                  (event) =>
                    this.onIndividualFieldChange(
                      event.target.value,
                      'sharePercentage',
                      index
                    )
                "
              />

              <!-- Is Individual Current Address also their Mailing Address?  -->
              <RadioListSimple
                title="Is Individual Current Address also their Mailing Address?"
                :items="yesNoOptions"
                itemsName="mailing-address"
                @change="
                  (event) =>
                    this.onIndividualFieldChange(
                      event.target.id,
                      'mailingAddress',
                      index
                    )
                "
              />

              <div v-if="b.mailingAddress === 'no'">
                <Input
                  label="Mailing Address"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onIndividualFieldChange(
                        event.target.value,
                        'mailingAddress',
                        index
                      )
                  "
                />
              </div>

              <!-- Email Address -->
              <Input
                label="Email Address"
                type="email"
                class="md:w-2/3"
                @change="
                  (event) =>
                    this.onIndividualFieldChange(
                      event.target.value,
                      'email',
                      index
                    )
                "
              />

              <!-- Preferred Method of Contacting Individual -->
              <RadioListSimple
                title="Preferred Method of Contacting Individual"
                :items="individualContactMethods"
                itemsName="individual-contact-method"
                @change="
                  (event) =>
                    this.onIndividualFieldChange(
                      event.target.id,
                      'contactMethod',
                      index
                    )
                "
              />

              <div>
                Is [insert name of Individual] prepared to guarantee the loan?
                YES/NO If YES - Percentage of the loan to be guaranteed? Insert
                %
                <br /><br />
                Are there any other Officers, Directors or Significant
                Shareholders ? YES/NO [Ask this after the completion of the
                information on each Individual until they say NO]
                <br /><br />
                If YES, include same section for Individual 2 & 3 etc.
              </div>
            </div>
          </Fieldset>

          <Fieldset title="Employment Information">
            <div class="todo">Employment Information</div>

            <div
              v-for="(person, index) in individuals"
              :key="index"
              class="space-y-6"
            >
              <h3 class="text-lg leading-6">
                Employment Information for {{ person.name }}
              </h3>

              <!-- Current Employer -->
              <Input
                label="Current Employer"
                class="md:w-2/3"
                @change="
                  (event) =>
                    this.onEmploymentFieldChange(
                      event.target.value,
                      'currentEmployer',
                      index
                    )
                "
              />

              <!-- Employment Status -->
              <RadioListSimple
                title="Employment Status"
                :items="employmentStatusOptions"
                itemsName="employment-status"
                @input="
                  (event) =>
                    this.onEmploymentFieldChange(
                      event.target.id,
                      'status',
                      index
                    )
                "
              />

              <div
                v-if="
                  person.employment.status === 'employment-full-time' ||
                  person.employment.status === 'employment-part-time'
                "
                class="space-y-6"
              >
                <Input
                  label="Employment Start Date"
                  class="md:w-2/3"
                  type="date"
                  @change="
                    (event) =>
                      this.onEmploymentFieldChange(
                        event.target.value,
                        'employmentStartDate',
                        index
                      )
                  "
                />
                <!-- Type of Business -->
                <Input
                  label="Type of Business"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onEmploymentFieldChange(
                        event.target.value,
                        'typeOfBusiness',
                        index
                      )
                  "
                />

                <MoneyInput
                  label="Annual Income"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onEmploymentFieldChange(
                        event.target.value,
                        'annualIncome',
                        index
                      )
                  "
                />

                <RadioListSimple
                  title="How Often is Individual Paid?"
                  :items="frequencyOptions"
                  itemsName="frequency"
                  @change="
                    (event) =>
                      this.onEmploymentFieldChange(
                        event.target.id,
                        'frequency',
                        index
                      )
                  "
                />
              </div>

              <div
                class="space-y-6"
                v-else-if="
                  person.employment.status === 'employment-self-employed'
                "
              >
                <Input
                  label="Type of Self-Employed Business"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onEmploymentFieldChange(
                        event.target.value,
                        'typeOfSelfEmployedBusiness',
                        index
                      )
                  "
                />
                <!-- num years in self employed business -->
                <Input
                  label="Number of Years in Self-Employed Business"
                  class="md:w-2/3"
                  type="number"
                  @change="
                    (event) =>
                      this.onEmploymentFieldChange(
                        event.target.value,
                        'numYearsInSelfEmployedBusiness',
                        index
                      )
                  "
                />
              </div>

              <div v-else>
                <!-- Other income type -->
                <CheckboxListSimple
                  title="Other Income Types"
                  :items="otherIncomeTypes"
                />

                <!-- total monthly -->
                <MoneyInput
                  label="Total Monthly Income"
                  class="md:w-2/3"
                  @change="
                    (event) =>
                      this.onEmploymentFieldChange(
                        event.target.value,
                        'totalMonthlyIncome',
                        index
                      )
                  "
                />
              </div>
            </div>

            <MoneyInput label="Total Monthly Income" class="md:w-2/3" />
          </Fieldset>

          <Fieldset
            title="Net Worth Statements"
            description="All Parties (Borrowers, Officers, Directors and Other Persons) Named Above MUST complete a Personal Financial Net Worth Statement"
          >
            <div class="todo">Net Worth Statements</div>
          </Fieldset>

          <Fieldset
            title="Information Regarding the Property Requiring a Mortgage"
          >
            <div class="todo">
              Information Regarding the Property Requiring a Mortgage
            </div>
          </Fieldset>

          <Fieldset title="Taxes and Expenses">
            <div class="todo">Taxes and Expenses</div>
          </Fieldset>

          <Fieldset title="Mortgage Requested">
            <div class="todo">Mortgage Requested</div>
          </Fieldset>

          <Fieldset
            title="Down Payment and/or Capital Previously Contributed to Property"
          >
            <div class="todo">
              Down Payment and/or Capital Previously Contributed to Property
            </div>
          </Fieldset>

          <Fieldset title="Current Mortgage(s)">
            <div class="todo">Current Mortgage(s)</div>
          </Fieldset>

          <Fieldset title="Environmental Report(s)">
            <div class="todo">Environmental Report(s)</div>
          </Fieldset>

          <Fieldset title="Geotechnical Report(s)">
            <div class="todo">Geotechnical Report(s)</div>
          </Fieldset>

          <Fieldset title="Appraisal Report(s)">
            <div class="todo">Appraisal Report(s)</div>
          </Fieldset>

          <Fieldset title="Survey(s)">
            <div class="todo">Survey(s)</div>
          </Fieldset>

          <Fieldset title="Market Research and Analysis">
            <div class="todo">Market Research and Analysis</div>
          </Fieldset>

          <Fieldset title="Insurance">
            <div class="todo">Insurance</div>
          </Fieldset>

          <Fieldset title="Project Drawings">
            <div class="todo">Project Drawings</div>
          </Fieldset>

          <Fieldset title="Title Searches">
            <div class="todo">Title Searches</div>
          </Fieldset>

          <Fieldset title="Property Taxes">
            <div class="todo">Property Taxes</div>
          </Fieldset>

          <Fieldset title="Project Budget/Proforma">
            <div class="todo">Project Budget/Proforma</div>
          </Fieldset>

          <Fieldset title="Title Insurance">
            <div class="todo">Title Insurance</div>
          </Fieldset>

          <Fieldset title="Deal Documents">
            <div class="todo">Deal Documents</div>
            <FileInput class="w-full" label="Deal Documents" />
          </Fieldset>
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

const yesNoOptions = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];

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

const individualContactMethods = [
  { id: "individual-business-phone", label: "Home/Business Phone" },
  { id: "individual-cell-phone", label: "Cell Phone" },
  { id: "individual-text", label: "Text Message" },
  { id: "individual-email", label: "Email" },
];

const employmentStatusOptions = [
  { id: "employment-full-time", label: "Full Time" },
  { id: "employment-part-time", label: "Part Time" },
  { id: "employment-self-employed", label: "Self Employed" },
  { id: "employment-unemployed", label: "Unemployed" },
];

const frequencyOptions = [
  { id: "frequency-weekly", label: "Weekly" },
  { id: "frequency-bi-weekly", label: "Bi-Weekly" },
  { id: "frequency-monthly", label: "Monthly" },
  { id: "frequency-annually", label: "Annually" },
  { id: "frequency-per-job", label: "Annually" },
  { id: "other", label: "Other" },
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
  employment: {
    status: "employment-full-time",
  },
};

const otherIncomeTypes = [
  { id: "investment-income", label: "Investment Income" },
  { id: "pension-income", label: "Pension Income" },
  { id: "dividend-income", label: "Dividend Income" },
  { id: "child-support", label: "Child Support" },
  { id: "other", label: "Other" },
];

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
      yesNoOptions,
      creditScoreOptions,
      contactMethodOptions,
      bankContactMethods,
      individualContactMethods,
      employmentStatusOptions,
      frequencyOptions,
      roles,
      residencyTypes,
      salutationTypes,
      otherIncomeTypes,
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
    onEmploymentFieldChange(value, field, index) {
      console.debug(value);
      if (this.individuals.length <= index) {
        return;
      }
      this.individuals[index].employment[field] = value;
      console.debug(this.individuals[index].employment);
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

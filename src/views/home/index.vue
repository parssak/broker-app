<template>
  <Container class="bg-gray-100">
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside
        class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 relative w-full"
      >
        <nav class="space-y-1 top-30 w-full lg:w-64 lg:fixed">
          <StepsBulletText />
          <!-- <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-50 text-accent hover:text-accent hover:bg-white'
                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
              'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <component
              :is="item.icon"
              :class="[
                item.current
                  ? 'text-accent group-hover:text-accent'
                  : 'text-gray-400 group-hover:text-gray-500',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
              ]"
              aria-hidden="true"
            />
            <span class="truncate">
              {{ item.name }}
            </span>
          </a> -->
        </nav>
      </aside>

      <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <Form
          title="Initial Broker Questions"
          description=" "
          @submit="handleSubmit"
          id="initial-broker-questions"
        >
          <RadioListSimple
            title="Mortgage Deal Type"
            :items="mortgageTypes"
            itemsName="mortgages"
          />
        </Form>

        <Form title="Add to Ledgers Questions" description=" ">
          <CheckListSimple title="Mortgage Deal Type" :items="mortgageTypes" />
        </Form>

        <Form title="Mortgage Lending Criteria < $3M" description=" ">
          <Input label="Property Location(s)" />

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
          <RadioListSimple
            itemsName="location"
            title="Location"
            :items="locations"
            :horizontal="true"
          />
          <RadioListSimple
            itemsName="air"
            title="Air-Conditioning"
            :items="acOptions"
            :horizontal="true"
          />
          <RadioListSimple
            itemsName="water"
            title="Water"
            :items="waterOptions"
            :horizontal="true"
          />
          <RadioListSimple
            itemsName="sewage"
            title="Sewage"
            :items="sewageOptions"
            :horizontal="true"
          />
          <RadioListSimple
            itemsName="heating"
            title="Heating"
            :items="heatOptions"
            :horizontal="true"
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

            <RadioListSimple
              title="Peer Review of ESA"
              :items="esaReviewOptions"
              itemsName="esa-review"
            />

            <RadioListSimple
              title="Environmental Reliance Letter (ERL) for the Property?"
              :items="erlOptions"
              itemsName="erl"
            />

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

            <RadioListSimple
              title="Peer Review of GR"
              :items="grReviewOptions"
              itemsName="gr-review"
            />

            <RadioListSimple
              title="Geotechnical Reliance Letter (GRL) for the Property"
              :items="grlOptions"
              itemsName="grl"
            />

            <RadioListSimple
              title="Peer Review of GRL"
              :items="grlReviewOptions"
              itemsName="grl-review"
            />
          </Fieldset>

          <Fieldset title="Appraisal Report(s) & Peer Review(s)">
            <RadioListSimple
              title="Appraisal Report (AR) for the Property"
              :items="arOptions"
              itemsName="ar"
            />

            <RadioListSimple
              title="Peer Review of AR"
              :items="arReviewOptions"
              itemsName="ar-review"
            />

            <RadioListSimple
              title="Appraisal Reliance Letter (ARL) for the Property"
              :items="arlOptions"
              itemsName="arl"
            />

            <RadioListSimple
              title="Peer Review of ARL"
              :items="arlReviewOptions"
              itemsName="arl-review"
            />
          </Fieldset>

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

          <Input label="Any Brokers/Brokerages Not Allowed" />
          <Input label="Any Preferred Brokers/Brokerages" />
        </Form>

        <Form title="Commercial Mortgage App < $3M" description=" ">
          <div class="grid md:grid-cols-2 gap-y-6 gap-x-12">
            <Input label="Name of Project" />
            <Input label="Date of Mortgage Application" type="date" />
          </div>

          <Fieldset title="Borrowers">
            <SwitchWithLabel
              label="Is there more than 1 borrower?"
              @change="onMultiBorrowerChange"
            />
            <Input
              label="Number of borrowers"
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
                placeholder="TODO: Make this Country & Province/State dropdowns"
              />
              <Input label="Address of Borrower" />
              <Input label="Name of Primary Contact with Borrower" />
              <Input label="Primary Contact's Email Address" type="email" />
              <Input
                label="Primary Contact's Mobile Telephone Number"
                type="email"
              />
              <Input label="Credit Score of Borrower" type="number" />
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
                @change="
                  (event) =>
                    this.onBorrowerFieldChange(
                      event.target.value,
                      'bankAddress',
                      index
                    )
                "
              />

              <Input
                label="Number of years with bank"
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

              <Input
                label="Name of Primary Contact with Bank"
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
                @change="
                  (event) =>
                    this.onIndividualFieldChange(
                      event.target.value,
                      'name',
                      index
                    )
                "
              />

              <RadioListSimple
                title="Residency"
                :items="residencyTypes"
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

              <RadioListSimple
                title="Salutations"
                :items="salutationTypes"
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

              <Input
                label="Date of Birth"
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

              <Input
                label="Credit Score"
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

              <RadioListSimple
                title="Source of Credit Score"
                :items="creditScoreOptions"
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

              <Input
                label="What percentage of shares of Borrower are held?"
                v-if="b.role === 'role-shareholder'"
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

              <Input
                label="Email Address"
                type="email"
                @change="
                  (event) =>
                    this.onIndividualFieldChange(
                      event.target.value,
                      'email',
                      index
                    )
                "
              />

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
            <div
              v-for="(person, index) in individuals"
              :key="index"
              class="space-y-6"
            >
              <h3 class="text-lg leading-6">
                Employment Information for {{ person.name }}
              </h3>

              <Input
                label="Current Employer"
                @change="
                  (event) =>
                    this.onEmploymentFieldChange(
                      event.target.value,
                      'currentEmployer',
                      index
                    )
                "
              />

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

                <Input
                  label="Type of Business"
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
                  @change="
                    (event) =>
                      this.onEmploymentFieldChange(
                        event.target.value,
                        'typeOfSelfEmployedBusiness',
                        index
                      )
                  "
                />

                <Input
                  label="Number of Years in Self-Employed Business"
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
                <CheckboxListSimple
                  title="Other Income Types"
                  :items="otherIncomeTypes"
                />

                <MoneyInput
                  label="Total Monthly Income"
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

            <MoneyInput label="Total Monthly Income" />
          </Fieldset>

          <Fieldset
            title="Net Worth Statements"
            description="All Parties (Borrowers, Officers, Directors and Other Persons) named above must complete a Personal Financial Net Worth Statement."
          >
            <FileInput label="Net Worth Statement" />
          </Fieldset>

          <Fieldset title="Financial Statements">
            <FileInput label="Financial Statements" />
            <SwitchInput
              label="Do you have a copy of the NOA for each Borrower for the past 2 years?"
            />
            <Input label="If NO, please provide an explanation" />
            <FileInput
              label="Upload the Most Recent NOA Received from CRA for each Borrower"
            />
            <MoneyInput
              label="According to the most recent NOA, what was the net income/loss shown?"
            />
          </Fieldset>

          <Fieldset
            title="Information Regarding the Property Requiring a Mortgage"
          >
            <MoneyInput label="Value of Property" />

            <RadioListSimple
              title="How was Value of Property Determined"
              :items="valueOfPropertyDeterminedOptions"
              itemsName="value-of-property-determined"
            />

            <RadioListSimple
              title="Mortgage Loan Purpose"
              :items="mortgageLoanPurposeOptions"
              itemsName="mortgage-loan-purpose"
            />

            <RadioListSimple
              title="Property Style"
              :items="propertyStyleOptions"
              itemsName="property-style"
            />

            <div class="grid md:grid-cols-2 gap-6">
              <RadioListSimple
                itemsName="air"
                title="Air-Conditioning"
                :items="acOptions"
              />
              <RadioListSimple
                itemsName="water"
                title="Water"
                :items="waterOptions"
              />
              <RadioListSimple
                itemsName="heating"
                title="Heating"
                :items="heatOptions"
              />
              <RadioListSimple
                itemsName="sewage"
                title="Sewage"
                :items="sewageOptions"
              />
            </div>
            <SwitchInput label="Does the Property have any rental income?" />
            <MoneyInput label="Total Current Monthly Rental Income" />
            <MoneyInput label="Total Current Monthly Expenses" />
            <Input type="number" label="Age of Property" />
            <Input type="number" label="Lot Size (Square Footage)" />
            <RadioListSimple
              title="Property Tenure"
              :items="propertyTenureOptions"
              itemsName="property-tenure"
            />
            <RadioListSimple
              title="Garage"
              :items="yesNoOptions"
              itemsName="garage"
            />
            <RadioListSimple
              title="Is the Garage Attached to the Building?"
              :items="yesNoOptions"
              itemsName="garage-attached"
            />
            <RadioListSimple
              title="Mortgage Deal Type"
              :items="mortgageDealTypeOptions"
              itemsName="mortgage-deal-type"
            />
            <Input type="number" label="Number of Parking Spots" />
          </Fieldset>

          <Fieldset title="Taxes and Expenses">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex flex-col justify-end">
                <MoneyInput label="Annual Property Taxes" />
              </div>
              <div class="flex flex-col justify-end">
                <MoneyInput label="Monthly Property Taxes" />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput
                  label="Monthly Heating, Ventilation and Humidity Control Expense"
                />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput label="Monthly Hydro Expenses" />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput label="Monthly Management Expense" />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput label="Monthly Interest Expenses" />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput label="Monthly Repair Expense" />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput
                  label="Monthly Expenses for Janitorial, Elevators, Window Cleaning, Waste Removal & Pest Control"
                />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput label="Monthly Insurance Expense" />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput label="Other Monthly Expenses" />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput
                  label="Monthly Sprinklers, Maintenance & Monitoring Expense"
                />
              </div>
              <div class="md:h-20 flex flex-col justify-end">
                <MoneyInput label="Total Monthly Expenses" />
              </div>
            </div>
          </Fieldset>

          <Fieldset title="Mortgage Requested">
            <MoneyInput label="Amount of Mortgage Loan Requested" />
            <RadioListSimple
              title="Mortgage Charge"
              :items="mortgageChargeOptions"
              itemsName="mortgage-charge"
            />
            <Input type="date" label="Closing Date" />
            <RadioListSimple
              title="Mortgage Type"
              :items="mortgageRequestTypes"
              itemsName="mortgage-request-type"
            />
            <RadioListSimple
              title="Mortgage Term Type"
              :items="mortgageTermTypes"
              itemsName="mortgage-request-type"
            />

            <RadioListSimple
              title="Blended Amortization"
              :items="yesNoOptions"
              itemsName="blended-amortization"
            />

            <RadioListSimple
              title="Existing Mortgage or Mortgages To Be Paid From Proceeds"
              :items="yesNoOptions"
              itemsName="existing-mortgage-or-mortgages-to-be-paid-from-proceeds"
            />
            <RadioListSimple
              title="Is Property Insured?"
              :items="yesNoOptions"
              itemsName="property-insured"
            />
          </Fieldset>

          <Fieldset
            title="Down Payment and/or Capital Previously Contributed to Property"
          >
            <RadioListSimple
              title="Is Borrower providing a Down Payment and/or Capital Previously Contributed to Property?"
              :items="yesNoOptions"
              itemsName="borrower-providing-down-payment-and-or-capital-previously-contributed-to-property"
            />
            <MoneyInput
              label="Amount of Down Payment and/or Capital Previously Contributed to Property"
            />
            <RadioListSimple
              title="Description of Down Payment and/or Capital Previously Contributed to Property"
              :items="previousDownPaymentOptions"
              itemsName="description-of-down-payment-and-or-capital-previously-contributed-to-property"
            />
            <RadioListSimple
              title="If No - Has Borrower already committed cash to Property"
              :items="yesNoOptions"
              itemsName="borrower-already-committed-cash-to-property"
            />
            <RadioListSimple
              title="Availability of Down Payment and/or Capital Previously Contributed to Property"
              :items="downPaymentAvailabilityOptions"
              itemsName="availability-of-down-payment-and-or-capital-previously-contributed-to-property"
            />
          </Fieldset>

          <Fieldset title="Current Mortgage(s)">
            <RadioListSimple
              title="Are there any Existing Mortgage(s) over the Property?"
              :items="yesNoOptions"
              itemsName="existing-mortgage-over-property"
            />
            <CheckListSimple
              title="If yes, identify existing mortgages with respect to the Property (choose all that apply)"
              :items="mortgageOptions"
            />
            <MoneyInput label="Anticipated Improvement Value" />
            <MoneyInput label="Anticipated Property Value Post-Improvements" />
            <MoneyInput
              label="Down Payment or Capital Contributed to Property"
            />
            <p>Use information from above to populate these cells</p>
            <MoneyInput label="1st Mortgage Amount" />
            <RadioListSimple
              title="1st Mortgage is Insured?"
              :items="yesNoOptions"
              itemsName="1st-mortgage-is-insured"
            />
            <p>If existing 1st mortgage</p>
            <Input label="1st Mortgage as a % of Property Value" />
            <Input label="Name of Insurer" />
            <Input label="Insurance Policy #" type="number" />
            <Input label="Name of Current 1st Mortgage Lender" />
            <Input label="Existing 1st Mortgage Rate" type="number" />
            <MoneyInput label="1st Mortgage Current Outstanding Amount" />
            <MoneyInput label="1st Mortgage Current Payment Amount" />
            <Input label="1st Mortgage LTV" type="number" />
            <Input label="1st Mortgage Maturity Date" type="date" />
            <RadioListSimple
              title="Mortgage Payment Frequency"
              :items="mortgagePaymentFrequencyOptions"
              itemsName="mortgage-payment-frequency"
            />
            <RadioListSimple
              title="Mortgage Rate Type"
              :items="mortgageRateTypeOptions"
              itemsName="mortgage-rate-type"
            />
            <MoneyInput label="Initial Amount of Mortgage" />
            <RadioListSimple
              title="Mortgage Term Type"
              :items="mortgageTermTypes"
              itemsName="mortgage-term-type"
            />
            <RadioListSimple
              title="Blended Amortization"
              :items="yesNoOptions"
              itemsName="blended-amortization"
            />
            <RadioListSimple
              title="Mortgage to be paid from proceeds"
              :items="yesNoOptions"
              itemsName="mortgage-to-be-paid-from-proceeds"
            />
            <RadioListSimple
              title="Is Property Insured?"
              :items="yesNoOptions"
              itemsName="property-insured"
            />
            <Input label="Name of Insurer" />
            <Input label="Insurance Policy #" type="number" />
            <MoneyInput
              label="Total Monthly Mortgage Payments for All Properties"
            />
            <p>Repeat for 2nd, 3rd, and HELOCs (if any)</p>
          </Fieldset>

          <Fieldset title="Environmental Report(s)">
            <RadioListSimple
              title="Do you have an environmental site assessment (ESA) for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-an-environmental-site-assessment-esa-for-the-property"
            />
            <p>If no</p>
            <Input label="Explain why there is no ESA" />
            <p>If yes, provide the following information</p>
            <Input label="Who authored the ESA?" />
            <FileInput label="Upload copy of the current ESA" />
          </Fieldset>

          <Fieldset title="Geotechnical Report(s)">
            <RadioListSimple
              title="Do you have a geotechnical report (GR) for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-a-geotechnical-report-gr-for-the-property"
            />
            <p>If no</p>
            <Input label="Explain why there is no GR" />
            <p>If yes, provide the following information</p>
            <Input label="Who authored the GR?" />
            <FileInput label="Upload copy of the current GR" />
          </Fieldset>

          <Fieldset title="Appraisal Report(s)">
            <RadioListSimple
              title="Do you have a appraisal report (AR) for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-a-appraisal-report-ar-for-the-property"
            />
            <p>If no</p>
            <Input label="Explain why there is no AR" />
            <p>If yes, provide the following information</p>
            <Input label="Who authored the AR?" />
            <FileInput label="Upload copy of the current AR" />

            <RadioListSimple
              title="Do you have an appraisal reliance letter (ARL) for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-an-appraisal-reliance-letter-arl-for-the-property"
            />
            <p>If no</p>
            <Input label="Explain why there is no ARL" />
            <p>If yes, provide the following information</p>
            <Input label="Who authored the ARL?" />
            <FileInput label="Upload copy of the current ARL" />
          </Fieldset>

          <Fieldset title="Survey(s)">
            <RadioListSimple
              title="Do you have a current survey for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-a-current-survey-for-the-property"
            />
            <p>If no</p>
            <Input label="Explain why there is no survey" />
            <p>If yes, provide the following information</p>
            <Input label="Who authored the survey?" />
            <FileInput label="Upload copy of the current survey" />
          </Fieldset>

          <Fieldset title="Market Research and Analysis">
            <RadioListSimple
              title="Do you have a market research and analysis for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-a-market-research-and-analysis-for-the-property"
            />
            <p>If no</p>
            <Input
              label="Explain why there is no Market Research and Analysis for the property"
            />
            <p>If yes, provide the following information</p>
            <FileInput
              label="Upload copy of the current Market Research and Analysis for the Property"
            />
          </Fieldset>

          <Fieldset title="Insurance">
            <RadioListSimple
              title="Do you have 1 or more insurance policies for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-1-or-more-insurance-policies-for-the-property"
            />

            <Input
              label="How many insurance policies do you have?"
              type="number"
            />

            <Input label="Name of the insurance provider(s)" />
            <FileInput label="Upload copy of the current insurance policies" />
          </Fieldset>

          <Fieldset title="Project Drawings">
            <RadioListSimple
              title="Do you have project drawings for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-project-drawings-for-the-property"
            />
            <p>If yes, provide the following information</p>

            <FileInput
              label="Upload a copy of the Project Drawings for the Property"
            />
          </Fieldset>

          <Fieldset title="Title Searches">
            <RadioListSimple
              title="Do you have title searches for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-title-searches-for-the-property"
            />
            <p>If yes, provide the following information</p>

            <FileInput
              label="Upload a copy of the Title Searches for the Property"
            />
          </Fieldset>

          <Fieldset title="Property Taxes">
            <RadioListSimple
              title="Are the property taxes current (paid) for the Property?"
              :items="yesNoOptions"
              itemsName="are-the-property-taxes-current-paid-for-the-property"
            />
            <p>If no</p>
            <Input
              label="Explain why the property taxes are have not been paid"
            />
            <p>If yes, provide the following information</p>
            <FileInput
              label="Upload a copy of proof that Property Taxes have been paid"
            />
          </Fieldset>

          <Fieldset title="Project Budget/Proforma">
            <RadioListSimple
              title="Do you have a budget or financial proforma for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-a-budget-or-financial-proforma-for-the-property"
            />
            <p>If yes, provide the following information</p>
            <FileInput
              label="Upload a copy of the budget or financial proforma for the Property	"
            />
          </Fieldset>

          <Fieldset title="Title Insurance">
            <RadioListSimple
              title="Do you have a Title Insurance for the Property?"
              :items="yesNoOptions"
              itemsName="do-you-have-a-title-insurance-for-the-property"
            />
            <p>If no</p>
            <Input
              label="If no -Explain why you don't have a Title Insurance for the Property"
            />
            <p>If yes, provide the following information</p>
            <FileInput
              label="Upload a copy of the Title Insurance for the Property"
            />
          </Fieldset>

          <Fieldset title="Deal Documents">
            <FileInput class="w-full" label="Deal Documents" />
          </Fieldset>
        </Form>
      </div>
    </div>
  </Container>
</template>

<script>
import StepsBulletText from "../../components/app/StepsBulletText.vue";
import Header from "../../components/base/Header.vue";
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

// #region

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
  { id: "frequency-per-job", label: "Per job" },
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

const valueOfPropertyDeterminedOptions = [
  { id: "value-of-property-determined-appraisal", label: "Appraisal" },
  {
    id: "value-of-property-determined-valuation-report",
    label: "Valuation Report",
  },
  { id: "value-of-property-determined-purchase", label: "Purchase" },
  { id: "value-of-property-determined-estimate", label: "Estimate" },
];

const mortgageLoanPurposeOptions = [
  {
    id: "mortgage-loan-purpose-debt-consolidation",
    label: "Debt Consolidation",
  },
  { id: "mortgage-loan-purpose-investment", label: "Investment" },
  { id: "mortgage-loan-purpose-improvements", label: "Improvements (minor)" },
  { id: "mortgage-loan-purpose-renovation", label: "Renovation (major)" },
  { id: "mortgage-loan-purpose-construction", label: "Construction" },
  { id: "mortgage-loan-purpose-mortgage-arrears", label: "Mortgage Arrears" },
  { id: "mortgage-loan-purpose-bridge-loan", label: "Bridge Loan" },
  { id: "mortgage-loan-purpose-other", label: "Other" },
];

const propertyStyleOptions = [
  {
    id: "property-style-industrial-manufacturing-facility",
    label: "Industrial - Manufacturing Facility",
  },
  {
    id: "property-style-industrial-warehouse-distribution-facility",
    label: "Industrial - Warehouse/Distribution Facility",
  },
  {
    id: "property-style-industrial-flex-multi-purpose-facility",
    label: "Industrial - Flex/Multi-Purpose Facility",
  },
  {
    id: "property-style-industrial-condominium",
    label: "Industrial Condominium",
  },
  {
    id: "property-style-retail-enclosed-shopping-mall",
    label: "Retail - Enclosed Shopping Mall",
  },
  {
    id: "property-style-retail-shopping-plaza-or-strip-mall",
    label: "Retail - Shopping Plaza or Strip Mall",
  },
  {
    id: "property-style-retail-pad-standalone-building",
    label: "Retail - Pad/Standalone Building",
  },
  {
    id: "property-style-office-office-building",
    label: "Office - Office Building",
  },
  {
    id: "property-style-office-suite-or-condominium",
    label: "Office - Suite or Condominium",
  },
  {
    id: "property-style-office-professional-suites-dental-medical-etc",
    label: "Office - Professional Suites (Dental, Medical, Legal, etc.)",
  },
  {
    id: "property-style-multi-family-residential-units-condominiums-apartment-buildings-commercial-offices-retail",
    label:
      "Multi-Family Residential Units (MFRU) - Condominiums, Apartment Buildings, Commercial/Offices/Retail",
  },
  {
    id: "property-style-multi-dwelling-unit-townhomes-condominiums-apartment-buildings",
    label:
      "Multi-Dwelling Unit (MDU) - Townhomes, Condominiums, Apartment Buildings)",
  },
  {
    id: "property-style-residential-homes-estates",
    label: "Residential Homes/Estates",
  },
  { id: "property-style-hotel-motel-lodging", label: "Hotel, Motel & Lodging" },
  { id: "property-style-restaurant", label: "Restaurant" },
  {
    id: "property-style-recreation-properties",
    label: "Recreation Properties",
  },
  { id: "property-style-land", label: "Land" },
];

const propertyTenureOptions = [
  { id: "property-tenure-freehold", label: "Freehold" },
  { id: "property-tenure-leasehold", label: "Leasehold" },
  {
    id: "property-tenure-leasehold-with-share-freehold",
    label: "Leasehold with a Share of Freehold",
  },
];

const mortgageDealTypeOptions = [
  { id: "mortgage-deal-purchase", label: "Purchase" },
  { id: "mortgage-deal-tyoe-construction", label: "Construction" },
  {
    id: "mortgage-deal-tyoe-purchase-construction",
    label: "Purchase + Construction",
  },
  { id: "mortgage-deal-tyoe-renovations", label: "Renovations" },
  { id: "mortgage-deal-tyoe-refinance", label: "Re-finance" },
  { id: "mortgage-deal-tyoe-switch", label: "Switch" },
  { id: "mortgage-deal-tyoe-bridge", label: "Bridge" },
];

const mortgageChargeOptions = [
  { id: "mortgage-charge-first", label: "1st" },
  { id: "mortgage-charge-second", label: "2nd" },
  { id: "mortgage-charge-third", label: "3rd" },
  { id: "mortgage-charge-heloc", label: "HELOC" },
];

const mortgageRequestTypes = [
  { id: "mortgage-request-type-open", label: "Open" },
  { id: "mortgage-request-type-closed", label: "Closed" },
  { id: "mortgage-request-type-other", label: "Other" },
];

const mortgageTermTypes = [
  { id: "mortgage-term-type-12m", label: "12 month" },
  { id: "mortgage-term-type-18m", label: "18 month" },
  { id: "mortgage-term-type-24m", label: "24 month" },
  { id: "mortgage-term-type-36m", label: "36 month" },
  { id: "mortgage-term-type-60m", label: "60 month" },
  { id: "mortgage-term-type-120m", label: "120 month" },
  { id: "mortgage-term-type-other", label: "Other" },
];

const previousDownPaymentOptions = [
  { id: "previous-down-payment-cash", label: "Cash" },
  {
    id: "previous-down-payment-available-following-sale-property",
    label: "Available Following Sale of Property",
  },
  {
    id: "previous-down-payment-accumulated-equity",
    label: "Accumulated Equity",
  },
  { id: "previous-down-payment-other", label: "Other" },
];

const downPaymentAvailabilityOptions = [
  { id: "down-payment-immediately", label: "Available Immediately" },
  {
    id: "down-payment-following-sale",
    label: "Available Following Sale of Other Property",
  },
  { id: "down-payment-other", label: "Other" },
];
// #endregion

const mortgageOptions = [
  { id: "existing-mortgage-1st", label: "1st" },
  { id: "existing-mortgage-2nd", label: "2nd" },
  { id: "existing-mortgage-3rd", label: "3rd" },
  { id: "existing-mortgage-heloc", label: "HELOC" },
  { id: "existing-mortgage-other", label: "Other" },
];

const mortgagePaymentFrequencyOptions = [
  { id: "mortgage-payment-frequency-weekly", label: "Weekly" },
  {
    id: "mortgage-payment-frequency-every-2-weeks",
    label: "Every 2 Weeks",
  },
  { id: "mortgage-payment-frequency-monthly", label: "Monthly" },
];

const mortgageRateTypeOptions = [
  { id: "mortgage-rate-type-fixed", label: "Fixed" },
  { id: "mortgage-rate-type-variable", label: "Variable" },
  { id: "mortgage-rate-type-interest-only", label: "Interest Only" },
];

const mortgageTermTypeOptions = [
  { id: "mortgage-term-type-12m", label: "12 month" },
  { id: "mortgage-term-type-18m", label: "18 month" },
  { id: "mortgage-term-type-24m", label: "24 month" },
  { id: "mortgage-term-type-36m", label: "36 month" },
  { id: "mortgage-term-type-60m", label: "60 month" },
  { id: "mortgage-term-type-120m", label: "120 month" },
  { id: "mortgage-term-type-other", label: "Other" },
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
    Header,
    StepsBulletText,
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
      valueOfPropertyDeterminedOptions,
      mortgageLoanPurposeOptions,
      propertyStyleOptions,
      propertyTenureOptions,
      mortgageDealTypeOptions,
      mortgageChargeOptions,
      mortgageRequestTypes,
      mortgageTermTypes,
      previousDownPaymentOptions,
      downPaymentAvailabilityOptions,

      //
      mortgageOptions,
      mortgagePaymentFrequencyOptions,
      mortgageRateTypeOptions,
      mortgageTermTypeOptions,
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
    handleSubmit(e) {
      e.preventDefault();
      const id = e.target?.id;
      console.log("Form submitted", id);
    },
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
        this.borrowers.splice(count, this.borrowers.length - count);
        // this.borrowers.forEach((borrower, index) => {
        //   if (index >= count) {
        //     borrower.hidden = true;
        //   }
        // });
      }
    },
  },
};
</script>

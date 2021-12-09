import { getRoutes, getNavigation } from "@/data/utils";

export const SITE_PATH = "broker-app";

const MASTER_ROUTES = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/home"),
    hidden: false,
  },
  {
    path: "/about",
    label: "about",
    component: () => import("@/views/about"),
    hidden: false,
  },
  {
    path: "/contact",
    label: "contact",
    component: () => import("@/views/contact"),
    hidden: false,
  },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);

// Form fields

export const countryTypes = [
  // { id: "residential", label: "Residential" }, // ! Removed as no info provided
  {
    id: "canada",
    label: "Canada",
  },
  {
    id: "united-states",
    label: "United States",
  },
];

export const mortgageTypes = [
  // { id: "residential", label: "Residential" }, // ! Removed as no info provided
  {
    id: "commercial-less-3",
    label: "Commercial &/or Construction (Less than $3 million total value)",
  },
  {
    id: "commercial-greater-3",
    label: "Commercial &/or Construction (More than $3 million total value)",
  },
];

export const chargeTypes = [
  { id: "charge-1st", label: "1st" },
  { id: "charge-2nd", label: "2nd" },
  { id: "charge-3rd", label: "3rd" },
  { id: "charge-bridge", label: "Bridge" },
];

export const termLengths = [
  { id: "term-1yr", label: "1 year" },
  { id: "term-18m", label: "18 months" },
  { id: "term-3yr", label: "3 years" },
  { id: "term-5yr", label: "5 years" },
  { id: "term-10yr", label: "10 years" },
  { id: "term-25yr", label: "25 years" },
  { id: "term-30yr", label: "30 years" },
  { id: "term-other", label: "Other" },
];

export const propertyStyles = [
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

export const locations = [
  { id: "urban", label: "Urban" },
  { id: "rural", label: "Rural" },
  { id: "either", label: "Either" },
];

export const acOptions = [
  { id: "ac-yes", label: "Yes" },
  { id: "ac-no", label: "No" },
  { id: "ac-not-relevant", label: "Not relevant" },
];

export const waterOptions = [
  { id: "water-municipal", label: "Municipal" },
  { id: "water-well", label: "Well Water" },
  { id: "water-either", label: "Either" },
];

export const heatOptions = [
  { id: "heat-forced-air", label: "Forced Air/Furnace" },
  { id: "heat-oil", label: "Heating Oil" },
  { id: "heat-propane", label: "Propane" },
  { id: "heat-any", label: "Any" },
];

export const sewageOptions = [
  { id: "sewage-municipal", label: "Municipal" },
  { id: "sewage-septic", label: "Septic" },
  { id: "sewage-either", label: "Either" },
];

export const loanTypes = [
  { id: "loan-interest-only", label: "Interest Only" },
  { id: "loan-amortized", label: "Amortized" },
  { id: "loan-closed", label: "Closed" },
  { id: "loan-open", label: "Open" },
];

export const bankruptcyOptions = [
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

export const consumerOptions = [
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

export const allowableLoanPurposes = [
  { id: "investment", label: "Investment" },
  { id: "improvements", label: "Improvements (minor)" },
  { id: "renovation", label: "Renovation (major)" },
  { id: "purchase-land-only", label: "Purchase Land Only" },
  {
    id: "purchase-land-with-existing-structure",
    label: "Purchase Land with Existing Structure",
  },
  { id: "construction", label: "Construction" },
  {
    id: "purchase-plus-construction",
    label: "Purchase + Construction",
  },
  { id: "mortgage-arrears", label: "Mortgage Arrears" },
  { id: "other", label: "Other" },
];

export const providedOptions = [
  { id: `must-be-provided`, label: "Must be provided" },
  {
    id: `needed-future`,
    label: "Will need to be provided in the future",
  },
  { id: `either`, label: "Either" },
];

export const yesNoOptions = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];

<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="(header, headerIdx) in headers"
                  :key="header.label"
                  scope="col"
                  :class="`
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                    ${headerIdx === 0 && 'text-gray-900 font-semibold'}
                  `"
                >
                  {{ header.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, itemIdx) in items"
                :key="item.email"
                :class="`${
                  itemIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } transition hover:bg-gray-200`"
              >
                <td
                  v-for="(value, valueIdx) in Object.values(item)"
                  :key="valueIdx"
                  :class="`px-6 py-4 whitespace-nowrap text-sm ${
                    valueIdx === 0
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-500'
                  }`"
                >
                  <div v-if="valueIdx === Object.values(item).length - 1">
                    <DotsHorizontalIcon class="h-6 w-6 text-accent" />
                  </div>
                  <div v-else>
                    {{ value }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <DotsHorizontalIcon aria-hidden="true" />
  </div>
</template>

<script>
import { DotsHorizontalIcon } from "@heroicons/vue/outline";

const defaultItems = [
  {
    date: "June 1, 2021",
    name: "Jane Cooper",
    ltv: "1,000",
    percentageMatch: "89%",
    actions: "",
  },
  {
    date: "May 4, 2021",
    name: "Cody Fisher",
    ltv: "345",
    percentageMatch: "53%",
    actions: "",
  },
  {
    date: "April 1, 2021",
    name: "John Smith",
    ltv: "1,000",
    percentageMatch: "88%",
    actions: "",
  },
];

const defaultHeaders = [
  {
    label: "Date",
  },
  {
    label: "Borrower's Name",
  },
  {
    label: "LTV",
  },
  {
    label: "Percentage Match",
  },
  {
    label: " ",
  },
];

export default {
  props: {
    components: {
      DotsHorizontalIcon,
    },
    items: {
      type: Array,
      default: () => defaultItems,
    },
    headers: {
      type: Array,
      default: () => defaultHeaders,
    },
  },
};
</script>

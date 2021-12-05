<template>
  <RadioListSimple
    title="Location"
    itemsName="locations"
    :items="items"
    @change="onRadioChange"
  />
  <div>
    <Input
      :label="selected === 'city-wide' ? 'Cities' : 'Provinces'"
      v-if="selected !== 'canada-wide'"
      @keydown.enter="onInputEnter"
      @blur="onInputUnfocus"
    />
    <div class="flex space-x-2 flex-wrap mt-2">
      <span
        class="
          px-1
          py-0.5
          rounded-sm
          capitalize
          text-xs
          bg-indigo-50
          text-indigo-700
          flex
          items-center
          transition
          cursor-pointer
          hover:bg-indigo-100
        "
        v-for="choice in choices"
        :key="choice"
        @click="onChoiceRemove(choice)"
      >
        {{ choice }}
        <XIcon class="h-3 w-3 ml-1" aria-hidden="true" />
      </span>
    </div>
  </div>
</template>

<script>
import Input from "./Input.vue";
import RadioListSimple from "./RadioListSimple.vue";
import { XIcon } from "@heroicons/vue/outline";

const items = [
  { id: "canada-wide", label: "Canada Wide" },
  { id: "province-wide", label: "Province Wide" },
  { id: "city-wide", label: "City Wide" },
];

export default {
  components: {
    RadioListSimple,
    Input,
    XIcon,
  },
  setup() {
    return {
      items,
    };
  },
  data() {
    return {
      selected: "canada-wide",
      choices: [],
    };
  },
  methods: {
    onRadioChange(e) {
      this.selected = e.target.id;
      this.choices = [];
    },
    onInputEnter(e) {
      const inputChoices = e.target.value.split(",");
      this.choices = Array.from(new Set([...this.choices, ...inputChoices]));
      e.target.value = "";
    },
    onInputUnfocus(e) {
      const inputChoices = e.target.value.split(",");
      this.choices = Array.from(new Set([...this.choices, ...inputChoices]));
      e.target.value = "";
    },
    onChoiceRemove(choice) {
      this.choices = this.choices.filter((c) => c !== choice);
    },
  },
};
</script>

/* tslint:disable object-literal-sort-keys */

import FLabel from "@/components/FLabel";

export default {
  name: "FInputText",
  components: {
    FLabel,
  },
  props: {
    autocomplete: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator: function(value) {
        return ["text", "password", "email"].indexOf(value) !== -1;
      },
    },
    name: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: null,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};

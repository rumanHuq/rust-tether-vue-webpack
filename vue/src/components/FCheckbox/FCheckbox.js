/* tslint:disable object-literal-sort-keys  */
export default {
  name: "FCheckbox",
  props: {
    value: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    label: {
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
    onChange(event) {
      this.$emit("change", event.target.value, event.target.checked);
    },
  },
};

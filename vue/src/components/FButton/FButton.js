/* tslint:disable object-literal-sort-keys  */
import FIcon from "@/components/FIcon";

export default {
  name: "FButton",
  components: {
    FIcon,
  },
  props: {
    label: String,
    type: {
      type: String,
      default: "button",
      validator: function(value) {
        return ["button", "submit", "reset"].indexOf(value) !== -1;
      },
    },
    variant: {
      type: String,
      default: "primary",
    },
    icon: {
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
    onClick(event) {
      this.$emit("click", event);
    },
  },
};

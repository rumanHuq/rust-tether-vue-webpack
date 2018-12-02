/* tslint:disable object-literal-sort-keys  */
import FCheckbox from "./FCheckbox.vue";

export default {
  name: "FCheckboxGroup",
  components: {
    FCheckbox,
  },
  props: {
    // items = {value, label, checked}
    checkboxItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      checkedItems: [],
    };
  },
  methods: {
    onChange(value, checked) {
      if (checked) {
        this.checkedItems = [...this.checkedItems, value];
      } else {
        const index = this.checkedItems.indexOf(value);
        if (index !== -1) {
          this.checkedItems.splice(index, 1);
        }
      }
      this.$emit("change", this.checkedItems);
    },
    updateChecked() {
      this.checkedItems = this.checkboxItems
        .filter(({ checked }) => checked)
        .map(item => item.value);
    },
  },
  created() {
    this.updateChecked();
  },
  watch: {
    checkboxItems() {
      this.updateChecked();
    },
  },
};

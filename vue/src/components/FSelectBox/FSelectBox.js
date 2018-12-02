/* tslint:disable object-literal-sort-keys */

import ClickOutside from "vue-click-outside";
import FLabel from "@/components/FLabel";
import FIcon from "@/components/FIcon";
import find from "lodash/find";

export default {
  components: {
    FLabel,
    FIcon,
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    value: {
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
  data() {
    return {
      menuOpen: false,
      selectedItem: null,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    hideMenu() {
      this.menuOpen = false;
    },
    onSelectItem(item) {
      this.menuOpen = false;
      this.selectedItem = item;
      this.$emit("change", item.value);
    },
    onSelectInput(event) {
      // TODO: FILTERING
      //console.log("FILTER", event.target.value);
    },
    onInputFocus() {
      this.menuOpen = true;
    },
    findItemByValue(value) {
      return find(this.items, {
        value,
      });
    },
  },
  created() {
    this.selectedItem = this.findItemByValue(this.value) || this.items[0];
  },
  directives: {
    ClickOutside,
  },
};

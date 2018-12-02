import Vue from "vue";
import fButton from "@/components/FButton/FButton.vue";

interface Idata {
  hello: string;
}
const data: Idata = { hello: "WORKS" };
export default Vue.extend({
  components: {
    fButton,
  },
  data: () => data,
  props: {
    msg: {
      default: "Hello Ruman!!",
      type: String,
    },
  },
});

import Vue from "vue";

interface Idata {
  hello: string;
}

const data: Idata = { hello: "WORKS" };
export default Vue.extend({
  data: () => data,
  methods: {
    sendToRust(e: Event) {
      this.$tether(
        JSON.stringify({
          ...e,
          arr: [1, 2, 3],
          nice: {
            nested: "sdr",
          },
        }),
      );
    },
  } as any,
  props: {
    msg: {
      default: "Hello Ruman!!",
      type: String,
    },
  },
});

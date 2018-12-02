/* tslint:disable object-literal-sort-keys  */
export default {
  name: "FIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconClass() {
      const classes = ["f-icon"];
      if (this.name) {
        classes.push(this.name);
      }
      if (this.class) {
        classes.push(this.class);
      }
      return classes.join(" ");
    },
  },
};

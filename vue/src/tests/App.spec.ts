// eslint-disable-next-line import/no-extraneous-dependencies
import { shallowMount } from "@vue/test-utils";
import App from "../modules/App/App.vue";

describe("App.vue", () => {
  test("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(App, { propsData: { msg } });
    expect(wrapper.text()).toMatch(msg);
  });
});

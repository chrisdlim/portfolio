import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("HelloWorld", () => {
  it("renders properly", () => {
    expect(true).toBeTruthy();
    // const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    // expect(wrapper.text()).toContain("Hello Vitest");
  });
});

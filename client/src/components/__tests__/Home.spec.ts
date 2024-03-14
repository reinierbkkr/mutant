import {mount} from "@vue/test-utils";
import Home from "../Home.vue";
import { expect, test } from "vitest";

const wrapper = mount(Home);

test("has a button", () => {
    expect(wrapper.find("button").exists()).toBe(true)
})

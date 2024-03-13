import {mount} from "@vue/test-utils";
import TheWelcome from "../TheWelcome.vue";
import { expect, test } from "vitest";

const wrapper = mount(TheWelcome);

test("has a button", () => {
    expect(wrapper.find("button").exists()).toBe(false)
})

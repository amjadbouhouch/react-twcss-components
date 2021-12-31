import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { MentionInput } from "../..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/MentionInput",
  component: MentionInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MentionInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MentionInput> = (args) => {
  const [value, setValue] = useState("aaaa");
  function handleChange(e, value, valueAsTest, mentions) {
    setValue(valueAsTest);
  }
  return <MentionInput {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Template.args = {};

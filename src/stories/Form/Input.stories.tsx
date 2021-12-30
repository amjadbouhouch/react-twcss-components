import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "../..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Address",
  placeHolder: "City Example.",
};

export const RightText = Template.bind({});
RightText.args = {
  label: "Phone Number",
  placeHolder: "92 651 494",
  rightText: "+216",
};
export const Small = Template.bind({});
Small.args = {
  label: "Full Name",
  className: "max-w-sm",
  required: true,
};

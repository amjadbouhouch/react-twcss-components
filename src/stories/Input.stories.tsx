import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "..";

// import {} from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
export const WithLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLabel.args = {
  label: "Label",
};
export const Required = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Required.args = {
  label: "Label",
  required: true,
};
export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  disabled: true,
};

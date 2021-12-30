import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../";

// import {} from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { type: "string" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  children: "Secondary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small Btn",
};
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: "Loading Btn",
};

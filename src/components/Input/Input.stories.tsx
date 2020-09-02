import { Input, InputProps } from "./Input";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {}
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args}></Input>;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  style: { width: "300px" },
  placeholder: "placeholder",
  onChange: action("Change")
};
export const DiabledInput = Template.bind({});
DiabledInput.args = {
  style: { width: "300px" },
  placeholder: "placeholder",
  disabled: true
};
export const PrependInput = Template.bind({});
PrependInput.args = {
  style: { width: "300px" },
  placeholder: "placeholder",
  prepend: "https://"
};

export const appendInput = Template.bind({});
appendInput.args = {
  style: { width: "300px" },
  placeholder: "placeholder",
  append: ".com"
};

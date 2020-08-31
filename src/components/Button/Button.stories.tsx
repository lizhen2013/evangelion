import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    onClick: action("clicked")
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  className: "",
  disabled: false,
  btnType: ButtonType.Default,
  href: "",
  size: ButtonSize.Medium
};
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true
};
export const DisabledLinkButton = Template.bind({});
DisabledLinkButton.args = {
  disabled: true,
  btnType: ButtonType.Link,
  href: "http://dummy.com"
};
export const smallDefaultButton = Template.bind({});
smallDefaultButton.args = {
  size: ButtonSize.Small
};

export const largeDefaultButton = Template.bind({});
largeDefaultButton.args = {
  size: ButtonSize.Large
};
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  btnType: ButtonType.Primary
};
export const DangerButton = Template.bind({});
DangerButton.args = {
  btnType: ButtonType.Danger
};
export const LinkButton = Template.bind({});
LinkButton.args = {
  btnType: ButtonType.Link,
  href: "http://dummy.com"
};

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonType, ButtonSize } from "./button";
const defaultProps = {
  onClick: jest.fn()
};
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "mockClassName"
};

const linkprops: ButtonProps = {
  btnType: ButtonType.Link,
  href: "http://dummyUrl",
  className: "mockClassName"
};

const disabledButtonProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "mockClassName",
  disabled: true,
  onClick: jest.fn()
};
describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element.disabled).toBeFalsy();
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct Button based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn mockClassName btn-primary btn-lg ");
  });
  it("should render a linkwhen btnType equals link and href is provided", () => {
    const wrapper = render(<Button {...linkprops}>Link</Button>);
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn mockClassName btn-link");
  });
  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledButtonProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn mockClassName btn-primary btn-lg ");
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledButtonProps.onClick).not.toHaveBeenCalled();
  });
});

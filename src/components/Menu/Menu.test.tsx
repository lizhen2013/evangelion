import React from "react";
import { fireEvent, render, RenderResult, cleanup } from "@testing-library/react";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";
const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test"
};

const testVeritcalModeProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",
  mode: "vertical"
};

const menu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1} disabled>
        disabled
      </MenuItem>
      <MenuItem index={2}>test</MenuItem>
    </Menu>
  );
};
let menuWrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledEelement: HTMLElement;
describe("test Menu and MenuItem Component", () => {
  beforeEach(() => {
    menuWrapper = render(menu(testProps));
    menuElement = menuWrapper.getByTestId("test-menu");
    activeElement = menuWrapper.getByText("active");
    disabledEelement = menuWrapper.getByText("disabled");
  });

  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("evangelion-menu test");
    expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledEelement).toHaveClass("menu-item is-disabled");
  });
  it("should click items to change active index and call the right callback ", () => {
    const thirdItem = menuWrapper.getByText("test");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith(2); //测试调用参数 index
    fireEvent.click(disabledEelement);
    expect(disabledEelement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1); //测试调用参数 index
  });
  it("should render vertical mode when mode is set to vertical", () => {
    //清除之前的wrapper
    cleanup();
    const wrapper = render(menu(testVeritcalModeProps));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });
});

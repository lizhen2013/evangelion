import React, { createContext, useState } from "react";
import classNames from "classnames";

export type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}
interface MenuContext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<MenuContext>({ index: 0 });
const Menu: React.FC<MenuProps> = (props) => {
  const { className, defaultIndex, mode, style, onSelect, children } = props;
  const [currActive, setCurrActive] = useState(defaultIndex);
  const classes = classNames("evangelion-menu", className, {
    "menu-vertical": mode === "vertical"
  });
  const handleClick = (index: number) => {
    setCurrActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedConext: MenuContext = {
    index: currActive ? currActive : 0,
    onSelect: handleClick
  };
  return (
    // data-testid is for the unit-test
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedConext}>{children}</MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal"
};
export default Menu;

import React, { FC, ReactElement, InputHTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
type InputSize = "lg" | "sm";
/**
 *since initial InputHTMLAttributes has same 'size' attribute, so we use typescrpt's utility type omit ot solve this duplicated name issue.
 *reference: https://www.typescriptlang.org/docs/handbook/utility-types.html
 **/
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
  //get every attributs
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  //calculate the className according to the attribute
  const cn = classNames("evangelion-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend
  });
  return (
    // return the dom nodeaccording to the attribute
    <div className={cn} style={style}>
      {prepend && <div className="evangelion-input-group-prepend">{prepend}</div>}
      <input className="evangelion-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="evangelion-input-group-append">{append}</div>}
    </div>
  );
};

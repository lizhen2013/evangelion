import React, { useState } from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Warning = "warning",
  Default = "default",
  Danger = "danger"
}

export interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType;
  onClose?: () => void;
  closable?: boolean;
}

export const Alert: React.FC<AlertProps> = (props) => {
  const [visible, setVisible] = useState(true);
  const { title, description, type, onClose, closable } = props;
  const classes = classNames("evangelion-alert", {
    [`evangelion-alert-${type}`]: type
  });
  const titleClass = classNames("evangelion-alert-title", {
    "bold-title": description
  });
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
  };
  return (
    <div className={classes}>
      <span className={titleClass}>{title}</span>
      {description && <p className="evangelion-alert-desc">{description}</p>}
      {closable && (
        <span className="evangelion-alert-close" onClick={handleClose}>
          {"X"}
        </span>
      )}
    </div>
  );
};

Alert.defaultProps = {
  type: "default" as AlertType.Default,
  closable: true
};

export default Alert;

import React, { useMemo } from "react";
import "./toast.css";

const Toast = ({ mode, message, onClose }) => {
  const classes = useMemo(() => {
    let baseClass = "toast";

    switch (mode) {
      case "success":
        baseClass += " success";
        break;

      case "warning":
        baseClass += " warning";
        break;

      case "error":
        baseClass += " error";
        break;
      case "info":
        baseClass += " error";
        break;
      default:
        break;
    }
    return baseClass;
  }, [mode]);
  return (
    <div className={classes} onClick={onClose}>
      <div className='toast__messages'>{message}</div>
    </div>
  );
};

export default Toast;

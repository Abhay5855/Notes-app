import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useToastPortal } from "../../hooks/useToastPortal";
import { useToastAutoClose } from "../../hooks/useToastAutoClose";
import Toast from "./Toast";

const ToastPortal = forwardRef(({ autoClose, autoCloseTime = 5000 }, ref) => {
  const { loaded, portalId } = useToastPortal();
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => {
    setToasts(toasts.filter((item) => item.id !== id));
  };

  useToastAutoClose({
    toasts,
    setToasts,
    autoCloseTime,
  });

  useImperativeHandle(ref, () => ({
    addMessage(toast) {
      setToasts([...toasts, { ...toast, id: Date.now() }]);
    },
  }));

  return loaded ? (
    createPortal(
      <div className='toast__container'>
        {toasts.map((item) => (
          <Toast
            key={item.id}
            mode={item.mode}
            message={item.message}
            onClose={() => removeToast(item.id)}
          />
        ))}
      </div>,

      document.getElementById(portalId)
    )
  ) : (
    <></>
  );
});

export default ToastPortal;

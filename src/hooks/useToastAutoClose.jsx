import { useState, useEffect } from "react";

export const useToastAutoClose = ({ toasts, setToasts, autoCloseTime }) => {
  const [removing, setRemoving] = useState("");

  useEffect(() => {
    if (toasts.length) {
      setTimeout(() => {
        const id = toasts[toasts.length - 1].id;

        setRemoving(id);
      }, autoCloseTime);
    }
  }, [toasts, autoCloseTime]);

  //timeout the toast
  useEffect(() => {
    const filteredToast = toasts.filter((item) => item.id !== removing);
    setToasts(filteredToast);
  }, [removing]);
};

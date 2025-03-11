import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SuccessToast = ({ message = "Record Updated Successfully" }) => {
  const [toastShown, setToastShown] = useState(false);

  if (!toastShown) {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setToastShown(true);
  }

  return <ToastContainer />;
};

export default SuccessToast;
  
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { combineData } from "../../../utils";

export default function Auth({ onCloseAuthModal }) {
  const [data, setData] = useState({
    activeComponent: "Login",
  });

  const handleActiveComponent = (activeComponent) => {
    setData(combineData(data, { activeComponent }));
  };

  const handleOverlay = (e) => {
    const isDialog = e?.target?.id === "dialog";
    if (isDialog) {
      onCloseAuthModal();
    }
  };

  return (
    <div
      className="fixed z-10 inset-0 bg-black bg-opacity-70 w-full h-full px-96 py-28"
      id="dialog"
      role="dialog"
      aria-modal="true"
      onClick={(e) => handleOverlay(e)}
    >
      <div className="bg-white h-full w-full flex flex-col rounded-md text-black">
        <div className="flex h-12 text-lg border-b-1 border-gray-300 cursor-pointer">
          <span
            onClick={() => handleActiveComponent("Login")}
            className={`w-2/4 h-full flex items-center justify-center rounded-tl-md ${
              data?.activeComponent === "Login"
                ? "bg-custom-104 text-white"
                : null
            }`}
          >
            Login
          </span>
          <span
            onClick={() => handleActiveComponent("SignUp")}
            className={`w-2/4 h-full flex items-center justify-center rounded-tr-md ${
              data?.activeComponent === "SignUp" ? "bg-custom-104 text-white" : null
            }`}
          >
            Sign Up
          </span>
        </div>
        {data?.activeComponent === "Login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useCookies } from "react-cookie";

export default function SignUp() {
  const [data, setData] = useState({
    hasFilledAllFields: false,
    errorMessage: "",
  });

  return (
    <form className="flex flex-col px-10 pt-12">
      <span className="text-red-500 text-center h-3 mb-6">
        {data?.errorMessage}
      </span>
      <div className="flex flex-wrap justify-between mb-2">
        <input
          placeholder="Name"
          type="text"
          className="w-2.5/5 mb-6 rounded-md"
        />
        <input
          placeholder="Email"
          type="email"
          className="w-2.5/5 mb-6 rounded-md"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-2.5/5 mb-6 rounded-md"
        />
        <input
          placeholder="Confirm Password"
          type="password"
          className="w-2.5/5 mb-6 rounded-md"
        />
        <input
          placeholder="Address"
          type="text"
          className="w-2.5/5 mb-6 rounded-md"
        />
        <input
          placeholder="Phone Number"
          type="text"
          className="w-2.5/5 mb-6 rounded-md"
        />
      </div>
      <button
        className={`py-3 rounded-md bg-custom-104 text-black text-md ${
          data?.hasFilledAllFields
            ? "text-white cursor-pointer"
            : "opacity-50 bg-opacity-50 cursor-not-allowed"
        }`}
      >
        Sign Up
      </button>
    </form>
  );
}

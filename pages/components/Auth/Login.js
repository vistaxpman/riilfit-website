import React, { useState } from "react";
import { useCookies } from "react-cookie";

export default function Login() {
  const [data, setData] = useState({
    hasFilledAllFields: false,
    errorMessage: "",
  });

  return (
    <form className="flex flex-col px-32 pt-12">
      <span className="text-red-500 text-center h-3 mb-6">
        {data?.errorMessage}
      </span>
      <input placeholder="Email" type="text" className="mb-6 rounded-md" />
      <input
        placeholder="Password"
        type="password"
        className="mb-10 rounded-md"
      />
      <button
        className={`py-3 rounded-md bg-custom-104 text-black text-md ${
          data?.hasFilledAllFields
            ? "text-white cursor-pointer"
            : "opacity-50 bg-opacity-50 cursor-not-allowed"
        }`}
      >
        Login
      </button>
    </form>
  );
}

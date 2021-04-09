import { useState } from "react";
import { useCookies } from "react-cookie";
import { signUp } from "../../../services/AuthServices";
import { combineData } from "../../../utils";

export default function SignUp() {
  const initialFields = {
    isRequesting: false,
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    phone_number: "",
  };

  const [data, setData] = useState({
    successMessage: "",
    errorMessage: "",
    initialFields,
  });

  const [cookie, setCookie] = useCookies();

  const handleSetField = (field, value) => {
    const obj = { successMessage: "", errorMessage: "" };
    obj[field] = value;
    setData(combineData(data, { ...obj }));
  };

  const hasFilledAllFields = () => {
    const {
      first_name,
      last_name,
      email,
      password,
      address,
      phone_number,
    } = data;
    const value =
      first_name && last_name && email && password && address && phone_number;
    return value;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setData(combineData(data, { isRequesting: true }));
    const {
      first_name,
      last_name,
      email,
      password,
      address,
      phone_number,
    } = data;
    const name = first_name + " " + last_name;
    const params = {
      name,
      email,
      password,
      address,
      phone_number,
      account_type: "client",
    };
    const payload = new FormData();
    for (let [key, value] of Object.entries(params)) {
      payload.append(key, value);
    }
    await signUp({ payload })
      .then((response) => {
        if (response && response?.success) {
          setData(
            combineData(data, {
              successMessage: "Account created successfully!",
              initialFields,
            })
          );
        } else {
          const message = response?.message[0];
          if (message) {
            setData(
              combineData(data, {
                isRequesting: false,
                errorMessage: message,
              })
            );
          }
        }
      })
      .catch((error) => {
        console.error(error);
        setData(
          combineData(data, {
            isRequesting: false,
            errorMessage: "SignUp error!",
          })
        );
      });
  };

  return (
    <form className="flex flex-col px-10 pt-12">
      {data?.errorMessage ? (
        <span className="text-red-500 text-center h-3 mb-6">
          {data?.errorMessage}
        </span>
      ) : data?.successMessage ? (
        <span className="text-green-500 text-center h-3 mb-6">
          {data?.successMessage}
        </span>
      ) : null}
      <div className="flex flex-wrap justify-between mb-2">
        <input
          placeholder="First Name"
          type="text"
          className="w-2.5/5 mb-6 rounded-md"
          value={data?.first_name}
          onChange={(e) => handleSetField("first_name", e.target.value)}
        />
        <input
          placeholder="Last Name"
          type="text"
          className="w-2.5/5 mb-6 rounded-md"
          value={data?.last_name}
          onChange={(e) => handleSetField("last_name", e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          className="w-2.5/5 mb-6 rounded-md"
          value={data?.email}
          onChange={(e) => handleSetField("email", e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="w-2.5/5 mb-6 rounded-md"
          value={data?.password}
          onChange={(e) => handleSetField("password", e.target.value)}
        />
        <input
          placeholder="Address"
          type="text"
          className="w-2.5/5 mb-6 rounded-md"
          value={data?.address}
          onChange={(e) => handleSetField("address", e.target.value)}
        />
        <input
          placeholder="Phone Number"
          type="tel"
          className="w-2.5/5 mb-6 rounded-md"
          value={data?.phone_number}
          onChange={(e) => handleSetField("phone_number", e.target.value)}
        />
      </div>
      <button
        className={`py-3 rounded-md bg-custom-104 text-black text-md ${
          hasFilledAllFields()
            ? "text-white cursor-pointer"
            : "opacity-50 bg-opacity-50 cursor-not-allowed"
        }`}
        onClick={(e) => handleSignUp(e)}
      >
        {data?.isRequesting ? "Please wait..." : "Sign Up"}
      </button>
    </form>
  );
}

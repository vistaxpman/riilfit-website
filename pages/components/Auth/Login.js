import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { login } from "../../../services/AuthServices";
import { combineData } from "../../../utils";

export default function Login({ closeAuthModal }) {
  const router = useRouter();
  const [data, setData] = useState({
    errorMessage: "",
    isRequesting: false,
    email: "",
    password: "",
  });

  const [cookies, setCookie] = useCookies();

  const handleNavigateToRoute = (route) => {
    router.push(route);
  };

  const handleSetField = (field, value) => {
    const obj = { errorMessage: "" };
    obj[field] = value;
    setData(combineData(data, { ...obj }));
  };

  const hasFilledAllFields = () => {
    const { email, password } = data;
    const value = email && password;
    return value;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setData(combineData(data, { isRequesting: true }));
    const { email, password } = data;
    const params = { email, password };
    const payload = new FormData();
    for (let [key, value] of Object.entries(params)) {
      payload.append(key, value);
    }
    await login({ payload })
      .then((response) => {
        if (response && response?.success) {
          const user = response?.payload;
          const { id, email, account_type } = user;
          if (account_type === "client") {
            setCookie(
              "user",
              { id, email, account_type },
              {
                path: "/",
                sameSite: true,
              }
            );

            //If user is in gym page or profile, closeAuthModal
            if (
              router?.pathname?.includes("/gym") ||
              router?.pathname === "/profile"
            ) {
              closeAuthModal();
            } else {
              handleNavigateToRoute("/profile");
            }
          } else {
            setData(
              combineData(data, {
                isRequesting: false,
                errorMessage: "Unauthorized access!",
              })
            );
          }
        } else {
          setData(
            combineData(data, {
              isRequesting: false,
              errorMessage: response?.message,
            })
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setData(
          combineData(data, {
            isRequesting: false,
            errorMessage: "Login error!",
          })
        );
      });
  };

  return (
    <form className="flex flex-col px-32 pt-12">
      {data?.errorMessage ? (
        <span className="text-red-500 text-center h-3 mb-6">
          {data?.errorMessage}
        </span>
      ) : null}
      <input
        placeholder="Email"
        type="text"
        className="mb-6 rounded-md"
        onChange={(e) => handleSetField("email", e.target.value)}
        value={data?.email}
      />
      <input
        placeholder="Password"
        type="password"
        className="mb-10 rounded-md"
        onChange={(e) => handleSetField("password", e.target.value)}
        value={data?.password}
      />
      <button
        className={`py-3 rounded-md bg-custom-104 text-black text-md ${
          hasFilledAllFields()
            ? "text-white cursor-pointer"
            : "opacity-50 bg-opacity-50 cursor-not-allowed"
        }`}
        onClick={(e) => handleLogin(e)}
      >
        {data?.isRequesting ? "Please wait..." : "Login"}
      </button>
    </form>
  );
}

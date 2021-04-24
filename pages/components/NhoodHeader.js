import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RiMenu3Fill } from "react-icons/ri";
import AccountCircleIcon from "mdi-react/AccountCircleIcon";
import { useCookies } from "react-cookie";
import { IoMdClose } from "react-icons/io";

export default function NhoodHeader({
  toggleMobileMenuVisibility,
  isMobileMenuVisible,
  handleAuthModalVisibility,
}) {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies() || {};

  useEffect(() => {
    if (!router.isReady) return;
    handleCheckRoute();
  }, [router.isReady]);

  const handleNavigateToRoute = (route) => {
    router.push(route);
  };

  const handleLogout = () => {
    removeCookie("user", {
      path: "/",
      sameSite: true,
    });
    router.replace("/nhood");
  };

  const checkUserLogin = () => {
    return cookies && cookies?.user;
  };

  const handleCheckRoute = () => {
    // console.log(router?.query);
  };

  return (
    <>
      <header className="h-20 bg-black fixed top-0 w-full flex items-center z-20">
        <img
          className="mx-auto w-16 h-16 object-contain sm:ml-4 sm:mr-0 sm:w-12 sm:h-12 cursor-pointer"
          src="/assets/homepage/nhood-logo.svg"
          onClick={() => handleNavigateToRoute("/nhood")}
        />
        <nav className="ml-auto mr-12 sm:hidden">
          <ul className="flex items-center text-sm">
            <li
              className="text-white ml-10 cursor-pointer"
              onClick={() => handleNavigateToRoute("/nhood")}
            >
              Home
            </li>
            <li
              className="text-white ml-10 cursor-pointer"
              onClick={() => handleNavigateToRoute("/nhood#services")}
            >
              Services
            </li>
            <li
              className="text-white ml-10 cursor-pointer"
              onClick={() => handleNavigateToRoute("/nhood#pricing")}
            >
              Make a Booking
            </li>
            <li
              className="text-white ml-10 cursor-pointer"
              onClick={() => handleNavigateToRoute("/nhood#contact")}
            >
              Contact
            </li>

            {checkUserLogin() ? (
              <li
                className="ml-24 md:ml-2 border-1 border-custom-104 text-custom-104 px-6 py-1 rounded-sm cursor-pointer"
                onClick={() => handleNavigateToRoute("/profile")}
              >
                <AccountCircleIcon />
              </li>
            ) : (
              <li
                className="border-1 border-custom-104 text-custom-104 px-6 py-1 rounded-sm ml-10 cursor-pointer"
                onClick={() => handleAuthModalVisibility(true)}
              >
                Login
              </li>
            )}
            {checkUserLogin() ? (
              <li
                className="hover:bg-opacity-80 bg-red-600 px-2 py-1 rounded-sm ml-4 cursor-pointer text-white"
                onClick={() => handleLogout()}
              >
                Logout
              </li>
            ) : null}
          </ul>
        </nav>
        <RiMenu3Fill
          className="hidden text-white h-8 w-8 ml-auto mr-4 sm:flex"
          onClick={() => toggleMobileMenuVisibility()}
        />
      </header>
      {isMobileMenuVisible ? (
        <section className="fixed top-0 h-full w-full flex z-100">
          <nav className="w-7/10 bg-black p-8">
            <IoMdClose
              className="text-gray-600 h-6 w-6 ml-auto mb-16"
              onClick={() => toggleMobileMenuVisibility()}
            />
            <ul className="flex flex-col items-center text-sm">
              <li className="text-white mb-8">
                <span onClick={() => toggleMobileMenuVisibility()}>Home</span>
              </li>
              <li
                className="text-white mb-8"
                onClick={() => {
                  handleNavigateToRoute("/nhood#services");
                  toggleMobileMenuVisibility();
                }}
              >
                Services
              </li>
              <li
                className="text-white mb-8"
                onClick={() => {
                  handleNavigateToRoute("/nhood#pricing");
                  toggleMobileMenuVisibility();
                }}
              >
                Make a Booking
              </li>
              <li
                className="text-white mb-8"
                onClick={() => {
                  handleNavigateToRoute("/nhood#contact");
                  toggleMobileMenuVisibility();
                }}
              >
                Contact
              </li>
              {checkUserLogin() ? (
                <li
                  className="border-1 border-custom-104 text-custom-104 px-6 py-1 rounded-sm cursor-pointer mb-8"
                  onClick={() => handleNavigateToRoute("/profile")}
                >
                  Profile
                </li>
              ) : (
                <li
                  onClick={async () => {
                    await toggleMobileMenuVisibility();
                    handleAuthModalVisibility(true);
                  }}
                  className="border-1 border-custom-104 text-custom-104 px-6 py-1 rounded-sm cursor-pointer"
                >
                  <span>Login</span>
                </li>
              )}
              {checkUserLogin() ? (
                <li
                  className="hover:bg-opacity-80 bg-red-600 px-2 py-1 rounded-sm cursor-pointer text-white"
                  onClick={() => handleLogout()}
                >
                  Logout
                </li>
              ) : null}
            </ul>
          </nav>
          <div
            className="w-3/10 bg-gray-900 bg-opacity-50"
            onClick={() => toggleMobileMenuVisibility()}
          ></div>
        </section>
      ) : null}
    </>
  );
}

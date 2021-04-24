import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import AccountCircleIcon from "mdi-react/AccountCircleIcon";
import MenuIcon from "mdi-react/MenuIcon";
import CloseIcon from "mdi-react/CloseIcon";
import { useCookies } from "react-cookie";
import Auth from "../components/Auth";
import { combineData } from "../../utils";

export default function Header({ gyms, isAuthVisible }) {
  const router = useRouter();
  const [data, setData] = useState({
    isAuthVisible,
    isRequesting: false,
    isMobileMenuVisible: false,
    isShowingGyms: true,
  });
  const [cookies, setCookie, removeCookie] = useCookies() || {};

  useEffect(() => {
    setData(combineData(data, { isAuthVisible }));
  }, [isAuthVisible]);

  const handleNavigateToRoute = (route) => {
    router.push(route);
  };

  const handleAuthModalVisibility = (isAuthVisible) => {
    setData(combineData(data, { isAuthVisible }));
  };

  const handleLogout = () => {
    removeCookie("user", {
      path: "/",
      sameSite: true,
    });
    router.replace("/");
  };

  const toggleMobileMenuVisibility = () => {
    let { isMobileMenuVisible } = data;
    isMobileMenuVisible = !isMobileMenuVisible;
    setData(combineData(data, { isMobileMenuVisible }));
  };

  const toggleShowingGymsVisibility = () => {
    let { isShowingGyms } = data;
    isShowingGyms = !isShowingGyms;
    setData((data) => combineData(data, { isShowingGyms }));
  };

  return (
    <>
      <Wrapper>
        <img
          className="my-auto w-48 md:w-40 h-20 object-contain mb-4 ml-10 md:ml-2 sm:ml-0"
          src="/assets/homepage/logo.svg"
        />
        <ul className="flex items-center mr-10  md:mr-2 sm:hidden">
          <li className="hover:text-custom-102 mr-10 md:mr-6 cursor-pointer flex items-center">
            <a
              href="/"
              className={router?.pathname === "/" ? "text-custom-104" : null}
            >
              Home
            </a>
          </li>
          <li
            className="hover:text-custom-102 mr-10 md:mr-6 cursor-pointer flex items-center"
            onClick={() => handleNavigateToRoute("/about-riilfit")}
          >
            <a
              className={
                router?.pathname === "/about-riilfit" ? "text-custom-104" : null
              }
            >
              About Rillfit
            </a>
          </li>
          <li
            className="hover:text-custom-102 mr-10 md:mr-6 cursor-pointer flex items-center"
            onClick={() => handleNavigateToRoute("/contact-us")}
          >
            <a
              className={
                router?.pathname === "/contact-us" ? "text-custom-104" : null
              }
            >
              Contact Us
            </a>
          </li>
          <li className="relative group mr-10 md:mr-6 cursor-pointer flex items-center">
            <span
              className={router?.pathname === "/gym" ? "text-custom-104" : null}
            >
              The Gyms
            </span>{" "}
            <ChevronDownIcon className="icon-down" />
            <div className="invisible group-hover:visible pt-8">
              <ul className="absolute inset-x-0 w-28 flex flex-col bg-custom-104">
                {/* {gyms?.map((gym, index) => (
                  <li
                    key={index}
                    onClick={() => handleNavigateToRoute(`gym/${gym?.tag}`)}
                    title={gym?.tag}
                    className="text-white text-sm h-8 flex items-center capitalize px-2 whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-white hover:bg-opacity-80"
                  >
                    {gym?.tag}
                  </li>
                ))} */}
                <li
                  onClick={() => handleNavigateToRoute("/nhood")}
                  title="Nhood"
                  className="text-white text-sm h-8 flex items-center capitalize px-2 whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-white hover:bg-opacity-80"
                >
                  Nhood
                </li>
              </ul>
            </div>
          </li>
          <li
            className="hover:text-custom-102 mr-10 md:mr-6 cursor-pointer flex items-center"
            onClick={() => handleNavigateToRoute("/dreambodi")}
          >
            <a>Dreambodi</a>
          </li>
          {/* {cookies && cookies?.user ? (
            router?.pathname !== "/profile" ? (
              <li
                className="login ml-24 md:ml-2"
                onClick={() => handleNavigateToRoute("/profile")}
              >
                <AccountCircleIcon />
              </li>
            ) : null
          ) : (
            <li
              className="login ml-24 md:ml-2 cursor-pointer"
              onClick={() => handleAuthModalVisibility(true)}
            >
              <span>Login</span>
            </li>
          )}
          {cookies && cookies?.user ? (
            <li
              className="hover:bg-opacity-80 bg-red-600 px-2 py-1 rounded-sm ml-4"
              onClick={() => handleLogout()}
            >
              Logout
            </li>
          ) : null} */}
        </ul>

        <MenuIcon
          className="text-white h-8 w-8 mr-4 hidden sm:block"
          onClick={() => toggleMobileMenuVisibility()}
        />

        {data?.isAuthVisible ? (
          <Auth onCloseAuthModal={() => handleAuthModalVisibility(false)} />
        ) : null}
      </Wrapper>

      {data?.isMobileMenuVisible ? (
        <div className="mr-4 fixed z-20 top-0 left-0 w-screen h-screen bg-gray-200 flex flex-col px-4 py-4">
          <CloseIcon
            className="ml-auto mb-16"
            onClick={() => toggleMobileMenuVisibility()}
          />
          <ul className="flex flex-col items-center">
            <li className="mb-8">
              <a
                href="/"
                className={router?.pathname === "/" ? "text-custom-104" : null}
              >
                Home
              </a>
            </li>
            <li
              className="mb-8"
              onClick={() => handleNavigateToRoute("/about-riilfit")}
            >
              <a
                className={
                  router?.pathname === "/about-riilfit"
                    ? "text-custom-104"
                    : null
                }
              >
                About Rillfit
              </a>
            </li>
            <li
              className="mb-8"
              onClick={() => handleNavigateToRoute("/contact-us")}
            >
              <a
                className={
                  router?.pathname === "/contact-us" ? "text-custom-104" : null
                }
              >
                Contact Us
              </a>
            </li>
            <li className="flex flex-col items-center mb-8">
              <div
                className="flex mb-1"
                onClick={() => toggleShowingGymsVisibility()}
              >
                <span
                  className={
                    router?.pathname === "/gym" ? "text-custom-104" : null
                  }
                >
                  The Gyms
                </span>{" "}
                <ChevronDownIcon className="icon-down" />
              </div>
              {data?.isShowingGyms ? (
                <ul className="w-28 flex flex-col bg-custom-104">
                  {/* {gyms?.map((gym, index) => (
                    <li
                      key={index}
                      onClick={() => handleNavigateToRoute(`gym/${gym?.tag}`)}
                      title={gym?.tag}
                      className="text-white text-sm h-8 flex items-center capitalize px-2 whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-white hover:bg-opacity-80"
                    >
                      {gym?.tag}
                    </li>
                  ))} */}
                  <li
                    onClick={() => handleNavigateToRoute(`nhood`)}
                    title="Nhood"
                    className="text-white text-sm h-8 flex items-center capitalize px-2 whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-white hover:bg-opacity-80"
                  >
                    Nhood
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

const Wrapper = styled.nav`
  display: flex;
  background: #000;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 80px;

  > ul {
    > li {
      a:hover {
        opacity: 0.8;
      }

      .icon-down {
        color: #e4ad2b;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    > li.login {
      border: 1px solid #e4ad2b;
      border-radius: 5px;
      color: #e4ad2b;
      padding: 5px 15px;

      &:hover {
        background: #e4ad2b;
        color: #fff;
        border: 1px solid rgb(0, 0, 0);
      }
    }
  }
`;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import AccountCircleIcon from "mdi-react/AccountCircleIcon";
import { useCookies } from "react-cookie";
import Auth from "../components/Auth";
import { combineData } from "../../utils";

export default function Header({ gyms, isAuthVisible }) {
  const router = useRouter();
  const [data, setData] = useState({
    isAuthVisible,
    isRequesting: false,
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

  return (
    <Wrapper>
      <img
        className="w-48 h-20 object-contain mb-4 ml-10"
        src="/assets/homepage/logo.svg"
      />
      <ul>
        <li className="hover:text-custom-102">
          <a
            href="/"
            className={router?.pathname === "/" ? "text-custom-104" : null}
          >
            Home
          </a>
        </li>
        <li className="hover:text-custom-102">
          <a
            href="/about-riilfit"
            className={
              router?.pathname === "/about-riilfit" ? "text-custom-104" : null
            }
          >
            About Rillfit
          </a>
        </li>
        <li className="hover:text-custom-102">
          <a
            href="/contact-us"
            className={
              router?.pathname === "/contact-us" ? "text-custom-104" : null
            }
          >
            Contact Us
          </a>
        </li>
        <li className="relative group">
          <span
            className={router?.pathname === "/gym" ? "text-custom-104" : null}
          >
            The Gyms
          </span>{" "}
          <ChevronDownIcon className="icon-down" />
          <div className="invisible group-hover:visible pt-8">
            <ul className="absolute inset-x-0 w-28 flex flex-col bg-custom-104">
              {gyms?.map((gym, index) => (
                <li
                  key={index}
                  onClick={() => handleNavigateToRoute(`gym/${gym?.tag}`)}
                  title={gym?.tag}
                  className="text-white text-sm h-8 flex items-center capitalize px-2 whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-white hover:bg-opacity-80"
                >
                  {gym?.tag}
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="hover:text-custom-102">
          <a href="/dreambodi">Dreambodi</a>
        </li>
        {cookies && cookies?.user ? (
          <li
            className="login ml-24"
            onClick={() => handleNavigateToRoute("/profile")}
          >
            <AccountCircleIcon />
          </li>
        ) : (
          <li
            className="login ml-24"
            onClick={() => handleAuthModalVisibility(true)}
          >
            <span>Login</span>
          </li>
        )}
        {cookies && cookies?.user ? (
          <li
            className="hover:bg-opacity-80 bg-red-600 px-2 py-1 rounded-sm"
            onClick={() => handleLogout()}
          >
            Logout
          </li>
        ) : null}
      </ul>
      {data?.isAuthVisible ? (
        <Auth onCloseAuthModal={() => handleAuthModalVisibility(false)} />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  background: rgb(0, 0, 0);
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
    display: flex;
    align-items: center;
    margin-right: 40px;

    > li {
      margin-right: 40px;
      display: flex;
      align-items: center;
      cursor: pointer;

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

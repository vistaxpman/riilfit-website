import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import Auth from "../components/Auth";
import { combineData } from "../../utils";

export default function Header({ gyms }) {
  const router = useRouter();
  const [data, setData] = useState({ isAuthVisible: false });

  const handleClick = (route) => {
    router.push(route);
  };

  const handleAuthModalVisibility = (isAuthVisible) => {
    setData(combineData(data, { isAuthVisible }));
  };

  return (
    <Wrapper>
      <ul>
        <li>
          <a
            href="/"
            className={router?.pathname === "/" ? "text-custom-104" : null}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about-riilfit"
            className={
              router?.pathname === "/about-riilfit" ? "text-custom-104" : null
            }
          >
            About Rillfit
          </a>
        </li>
        <li>
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
            <ul className="absolute inset-x-0 w-28 flex flex-col bg-black">
              {gyms?.map((gym, index) => (
                <li
                  key={index}
                  onClick={() => handleClick("gym")}
                  title={gym.name}
                  className="text-white text-sm h-8 flex items-center capitalize px-2 whitespace-nowrap overflow-ellipsis overflow-hidden text-center hover:text-white hover:bg-custom-104"
                >
                  {gym.name}
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <a href="/dreambodi">Dreambodi</a>
        </li>
        <li className="login">
          <span onClick={() => handleAuthModalVisibility(true)}>Login</span>
        </li>
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
  justify-content: flex-end;
  align-items: center;
  padding-right: 153px;
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

    > li {
      margin-left: 40px;
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
      padding: 7px 15px;

      &:hover {
        background: #e4ad2b;
        color: #fff;
        border: 1px solid rgb(0, 0, 0);
      }
    }
  }
`;

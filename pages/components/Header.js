import React from "react";
import styled from "styled-components";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";

export default function Header() {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-riilfit">About Rillfit</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
        <li>
          The Gyms <ChevronDownIcon className="icon-down" />
        </li>
        <li>
          <a href="/dreambodi">Dreambodi</a>
        </li>
        <li className="login">
          <a href="/login">Login</a>
        </li>
      </ul>
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

  ul {
    display: flex;
    align-items: center;

    li {
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

    li.login {
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

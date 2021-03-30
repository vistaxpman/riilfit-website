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
          <a href="/dreambodi">Dreambodi</a>
        </li>
        <li>
          <a href="/about-riilfit">About Rillfit</a>
        </li>
        <li>
          The Gyms <ChevronDownIcon className="icon-down" />
        </li>
        <li className="contact-us">
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  background: rgb(0, 0, 0);
  justify-content: flex-end;
  padding: 15px 153px 15px 0;
  color: #fff;
  font-size: 14px;

  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: 40px;
      display: flex;
      align-items: center;
      cursor: pointer;

      .icon-down {
        color: #e4ad2b;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    li.contact-us {
      border: 1px solid #e4ad2b;
      border-radius: 6px;
      color: #e4ad2b;
      padding: 7px 15px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

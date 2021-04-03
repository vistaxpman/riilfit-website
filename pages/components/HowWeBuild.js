import React from "react";
import styled from "styled-components";
import GooglePlayIcon from "mdi-react/GooglePlayIcon";
import AppleIcon from "mdi-react/AppleIcon";

export default function HowWeBuild() {
  return (
    <Wrapper>
      <img src="/assets/homepage/row3-icon1.svg" />
      <span>Watch how we Build with Dreambodi</span>
      <div>
        <img src="/assets/homepage/row3-img.svg" />
        <div>
          <span>Join over 15,000+ trainer to train from home</span>
          <span>Download Dreambodi today to get started</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </span>
          <div>
            <div>
              <GooglePlayIcon />
              <div>
                <span>Get Dreambodi</span>
                <span className="btn-app-store">Google Play</span>
              </div>
            </div>
            <div>
              <AppleIcon />
              <div>
                <span>Get Dreambodi</span>
                <span className="btn-app-store">App Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5% 15%;
  align-items: center;

  > img:nth-child(1) {
    height: 40px;
    width: 40px;
  }

  > span:nth-child(2) {
    font-weight: 600;
    font-size: 30px;
    line-height: 56px;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 60px;
  }

  > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;

    > img:nth-child(1) {
      height: 300px;
      width: 28%;
      object-fit: cover;
      margin-right: 2%;
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      width: 35%;

      > span:nth-child(1) {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #f77321;
        margin-bottom: 20px;
      }

      > span:nth-child(2) {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: -1px;
        color: #1d293f;
        margin-bottom: 30px;
      }

      > span:nth-child(3) {
        font-size: 14px;
        margin-bottom: 40px;
      }

      > div:nth-child(4) {
        display: flex;
        align-items: center;
        font-size: 15px;

        > div {
          display: flex;
          align-items: center;
          font-size: 13px;
          border: 1px solid #e2e4e8;
          border-radius: 5px;
          padding: 5px 10px;

          > svg:nth-child(1) {
            height: 20px;
            width: 20px;
            color: #ffbf00;
            margin-right: 10px;
          }

          > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            font-size: 13px;

            > .btn-app-store {
              font-weight: bold;
            }
          }
        }

        > div:nth-child(1) {
          margin-right: 5%;
        }
      }
    }
  }
`;

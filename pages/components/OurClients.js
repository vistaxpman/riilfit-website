import React from "react";
import getConfig from "next/config";
import styled from "styled-components";

export default function OurClients() {
  const { publicRuntimeConfig } = getConfig();

  return (
    <Wrapper>
      <div
        className="wave-left"
        style={{
          backgroundImage: `url(${publicRuntimeConfig.ASSETS_FOLDER}/homepage/wave-left.png)`,
        }}
      ></div>
      <div
        className="wave-right"
        style={{
          backgroundImage: `url(${publicRuntimeConfig.ASSETS_FOLDER}/homepage/wave-right.png)`,
        }}
      ></div>
      <div className="row1-wrapper">
        <div className="row1-content">
          <div>
            <div>
              <span></span>
              <span>Our Clients</span>
            </div>
            <span>Trusted by over 400,000 gym worldwide since 2021</span>
            <span>
              Our rigs are used by serious gyms for serious fitness. We take
              training to the next level with bespoke cooperative service,
              design and fit out to ensure your gym is filled with the best
              possible rig equipment to your specifications.
            </span>
          </div>
          <div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 350px;
  position: relative;
  display: flex;

  .wave-left {
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 300px;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .wave-right {
    position: absolute;
    top: 0;
    right: 0;
    height: 199px;
    width: 540px;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .row1-wrapper {
    height: 100%;
    width: 100%;
    padding: 7% 10%;
  }

  .row1-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      width: 30%;

      > div:nth-child(1) {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        > span:nth-child(1) {
          width: 60px;
          border-top: 2px solid #e4ad2b;
          margin-right: 15px;
        }

        > span:nth-child(2) {
          color: #e4ad2b;
          font-style: italic;
          font-size: 13px;
          font-weight: bold;
        }
      }

      > span:nth-child(2) {
        font-size: 20px;
        line-height: 26px;
        font-weight: bold;
        font-family: Arial;
        margin-bottom: 15px;
      }

      > span:nth-child(3) {
        font-size: 14px;
        line-height: 22px;
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      width: 60%;
      height: 100%;
      justify-content: center;

      > div {
        display: flex;
        column-gap: 10%;
        margin-bottom: 40px;
        justify-content: center;

        > div {
          width: 20%;
          background: #ffffff;
          box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          border: 1px solid #fff;
          height: 40px;
        }
      }
    }
  }
`;

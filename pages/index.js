import Head from "next/head";
import getConfig from "next/config";
import styled from "styled-components";
import StarIcon from "mdi-react/StarIcon";
import CheckIcon from "mdi-react/CheckIcon";
import GooglePlayIcon from "mdi-react/GooglePlayIcon";
import AppleIcon from "mdi-react/AppleIcon";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";

const { publicRuntimeConfig } = getConfig();

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rillfit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className="sleek-scrollbar">
        <Header />
        <div className="home-wrapper">
          <Carousel />
          <section className="home-content">
            <div className="row1">
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
                    <span>
                      Trusted by over 400,000 gym worldwide since 2021
                    </span>
                    <span>
                      Our rigs are used by serious gyms for serious fitness. We
                      take training to the next level with bespoke cooperative
                      service, design and fit out to ensure your gym is filled
                      with the best possible rig equipment to your
                      specifications.
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
            </div>
            <div className="row2">
              <img src="/assets/homepage/row2-banner.svg" />
              <div>
                <div>
                  <span></span>
                  <span>Why Choose Us</span>
                </div>
                <span>
                  Here is some reason why you <br /> should choose us
                </span>
                <div>
                  <div>
                    <div>
                      <StarIcon />
                    </div>
                    <span>EXCLUSIVE</span>
                    <span>
                      Our rigs are used by serious gyms for serious fitness. We
                      take training to the next level with bespoke cooperative
                      service, design and fit out to ensure your gym is filled
                      with the best possible.
                    </span>
                  </div>
                  <div>
                    <div>
                      <CheckIcon />
                    </div>
                    <span>Trusted</span>
                    <span>
                      Our rigs are used by serious gyms for serious fitness. We
                      take training to the next level with bespoke cooperative
                      service, design and fit out to ensure your gym is filled
                      with the best possible.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row3">
              <img src="/assets/homepage/row3-icon1.svg" />
              <span>Watch how we Build with Dreambodi</span>
              <div>
                <img src="/assets/homepage/row3-img.svg" />
                <div>
                  <span>Join over 15,000+ trainer to train from home</span>
                  <span>Download Dreambodi today to get started</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
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
            </div>
            <section className="px-64 py-10 flex flex-col items-center">
              <h1 className="text-4xl font-medium mb-2">
                What Our Partners say
              </h1>
              <span className="w-2/5 text-center text-sm mb-6">
                It has been a real pleasure partnering with Riilfit sports as
                they guided us through the set up and commission of our gym
                center.
              </span>
              <div className="flex justify-between">
                <div className="flex flex-col w-2/5">
                  <span className="text-custom-104 w-3/4 font-medium text-lg leading-5 mb-4">
                    Finding creative digital agency company is not easy these
                    days.
                  </span>
                  <span className="text-custom-105 text-sm mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </span>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-md text-sm">
                      <span className="font-medium">Robert Kowalski</span>
                      <span>Manager of skyfitnessng.com</span>
                    </div>
                    <div className="flex items-center">
                      <FaLongArrowAltLeft className="mr-2 opacity-25" />
                      <FaLongArrowAltRight className="ml-2" />
                    </div>
                  </div>
                </div>
                <div className="w-2.5/5 h-56">
                  <img
                    className="flex object-contain h-full w-full"
                    src="/assets/homepage/workout.svg"
                  />
                </div>
              </div>
            </section>
            <section className="bg-custom-103 px-20 py-16">
              <h2 className="text-2xl font-semibold mb-2">
                Subscribe to our Newsletter
              </h2>
              <span className="block text-sm w-2/5 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </span>
              <div className="h-10">
                <input
                  className="w-1/5 border-1 border-r-0 border-gray-300 rounded h-10"
                  type="text"
                  placeholder="Type your email here.."
                />
                <button className="custom-orange h-10 px-4 text-white custom-border rounded-sm">
                  SUBSCRIBE
                </button>
              </div>
            </section>
            <Footer />
          </section>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;

  .home-wrapper {
    margin-top: 80px;

    .home-content {
      display: flex;
      flex-direction: column;

      .row1 {
        display: grid;
        grid-template-columns: 50% 50%;
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

        &-wrapper {
          height: 100%;
          width: 100%;
          padding: 7% 10%;
        }

        &-content {
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
      }

      .row2 {
        background: #f4f4f4;
        border-top-right-radius: 80px;
        display: flex;
        justify-content: center;
        padding: 3% 7%;

        > img:nth-child(1) {
          border-radius: 10px 7px 7px 70px;
          margin-right: 10%;
          height: 370px;
          width: 25%;
        }

        > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          width: 45%;

          > div:nth-child(1) {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            > span:nth-child(1) {
              width: 60px;
              border-top: 2px solid #434343;
              margin-right: 15px;
            }

            > span:nth-child(2) {
              color: #434343;
              font-style: italic;
              font-size: 13px;
              font-weight: bold;
            }
          }

          > span:nth-child(2) {
            color: #434343;
            font-family: Arial;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 40px;
          }

          > div:nth-child(3) {
            display: flex;

            > div {
              display: flex;
              flex-direction: column;
              width: 42%;
              background: #ffffff;
              box-shadow: 0px 26px 40px rgba(0, 0, 0, 0.12);
              border-radius: 16px;
              padding: 20px;
              height: 260px;

              > div:nth-child(1) {
                background: rgba(228, 173, 43, 0.12);
                height: 35px;
                width: 35px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;

                > svg {
                  color: #e4ad2b;
                  height: 20px;
                  width: 20px;
                }
              }

              > span:nth-child(2) {
                text-transform: uppercase;
                font-weight: bold;
                margin-bottom: 5px;
              }

              > span:nth-child(3) {
                font-size: 14px;
              }
            }

            > div:nth-child(2) {
              margin: 10% 0 0 10%;
            }
          }
        }
      }

      .row3 {
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
      }
    }
  }
`;

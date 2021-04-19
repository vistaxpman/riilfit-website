import { useState, useEffect } from "react";
import Head from "next/head";
import getConfig from "next/config";
import styled from "styled-components";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HowWeBuild from "./components/HowWeBuild";
import WhyChooseUs from "./components/WhyChooseUs";
import OurClients from "./components/OurClients";
import { combineData } from "../utils";

const { publicRuntimeConfig } = getConfig();

export default function Home() {
  const [data, setData] = useState({
    gyms: [],
  });

  useEffect(() => {
    // handleFetchGyms();
  }, []);

  const handleFetchGyms = async () => {
    let page_number = 0;
    let limit = 10;
    const API_URL = publicRuntimeConfig.API_URL;

    let res = await fetch(
      `${API_URL}/gyms?page_number=${page_number}&limit=${limit}`
    );

    res = await res.json();
    const gyms = res?.payload || [];
    page_number = gyms?.length ? page_number + 1 : page_number;

    setData(combineData(data, { gyms }));
  };

  return (
    <div>
      <Head>
        <title>Rillfit - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className="sleek-scrollbar">
        {/* <Header gyms={data?.gyms} /> */}
        <Header />
        <div className="home-wrapper flex flex-col">
          <Carousel />
          <OurClients />
          <WhyChooseUs />
          <HowWeBuild />
          <section className="px-64 py-10 flex flex-col items-center">
            <h1 className="text-4xl font-medium mb-2">What Our Partners say</h1>
            <span className="w-2/5 text-center text-sm mb-6">
              It has been a real pleasure partnering with Riilfit sports as they
              guided us through the set up and commission of our gym center.
            </span>
            <div className="flex justify-between">
              <div className="flex flex-col w-2/5">
                <span className="text-custom-104 w-3/4 font-medium text-lg leading-5 mb-4">
                  Finding creative digital agency company is not easy these
                  days.
                </span>
                <span className="text-custom-105 text-sm mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
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
  }
`;

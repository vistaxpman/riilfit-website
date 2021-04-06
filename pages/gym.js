import { useState } from "react";
import Head from "next/head";
import getConfig from "next/config";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { combineData } from "../utils";

const { publicRuntimeConfig } = getConfig();

export default function Gym({ gyms }) {
  const [data, setData] = useState({
    selectedPlan: null,
    plans: [
      { id: "1234", duration: "Weekly", price: "8000" },
      { id: "2345", duration: "Monthly", price: "12000" },
      { id: "3456", duration: "Every 3 months", price: "20000" },
      { id: "4567", duration: "Yearly", price: "250000" },
    ],
  });

  const handleSelectPlan = (selectedPlan) => {
    setData(combineData(data, { selectedPlan }));
  };

  return (
    <div>
      <Head>
        <title>Rillfit - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className="sleek-scrollbar">
        <Header gyms={gyms} />
        <div className="home-wrapper">
          <section className="flex justify-between px-16 py-20">
            <div className="w-1/3.5 flex flex-col">
              <img
                className="h-64 w-full mb-2"
                src="https://1.bp.blogspot.com/-FhLP_he9KY8/XeojX_NMa1I/AAAAAAAAJeM/UAOXxZgjSjcPeKTAtRf0R67IJDswm-ffACEwYBhgL/s1600/IMG-20191129-WA0009.jpg"
              />
              <div className="flex justify-between">
                <img
                  className="w-3/6 h-48"
                  src="https://1.bp.blogspot.com/-Tq38W2qXFyk/XeojV9y71vI/AAAAAAAAJdw/ZxTq1eI1G7orX_0_eXYVw4AbecvRnC87QCLcBGAsYHQ/s320/IMG-20191129-WA0001.jpg"
                />
                <img
                  className="w-3/6 h-48"
                  src="https://1.bp.blogspot.com/-FGmaHvTtZ3c/XeooUXqCoyI/AAAAAAAAJeY/ZeCM6d9Rg0AnHli7_3MyIUc2lOV868rBQCLcBGAsYHQ/s320/Neighborhood-Gym-Port-Harcourt11-696x461.jpg"
                />
              </div>
            </div>
            <div className="w-3/5 shadow-md py-8 px-8">
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-2xl font-medium">
                  NEIGHBOURHOOD GYM (NHOOD GYM)
                </h2>
                <span>
                  2 Alhaji Estate, Water Gate Hotel Opposite Obio Akpo LGA
                  Council HQ Obio Akpo, 500102, RUMUDUMAYA
                </span>
                <span className="font-medium">nhood@gmail.com</span>
                <span className="font-medium">08076543212</span>
              </div>
              <div className="flex flex-wrap justify-between mb-6">
                {data?.plans?.map((plan, index) => (
                  <div
                    onClick={() => handleSelectPlan(plan)}
                    key={index}
                    className={`w-3/10 h-32 flex flex-col items-center justify-center border-1 rounded-md mb-6 cursor-pointer ${
                      data?.selectedPlan?.id === plan?.id
                        ? "text-white border-custom-104 bg-custom-104"
                        : "text-black border-gray-300 bg-white"
                    }`}
                  >
                    <span className="text-xl mb-2">{plan?.duration}</span>
                    <span className="font-normal">₦{plan?.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  className={`w-48 py-3 rounded-md bg-custom-104 text-black ${
                    data?.selectedPlan
                      ? "text-white cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </Wrapper>
    </div>
  );
}

export async function getServerSideProps() {
  let page_number = 0;
  let limit = 10;
  const API_URL = publicRuntimeConfig.API_URL;

  let res = await fetch(
    `${API_URL}/gyms?page_number=${page_number}&limit=${limit}`
  );

  res = await res.json();
  const gyms = res?.payload;
  page_number = gyms?.length ? page_number + 1 : page_number;

  return {
    props: {
      gyms,
      isFetching: false,
      API_URL,
      page_number,
      limit,
    },
  };
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

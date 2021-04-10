import { useState, useEffect } from "react";
import Head from "next/head";
import getConfig from "next/config";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { combineData } from "../utils";

const { publicRuntimeConfig } = getConfig();

export default function ContactUs() {
  const [data, setData] = useState({
    gyms: [],
  });

  useEffect(() => {
    handleFetchGyms();
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
        <title>Rillfit - Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className="sleek-scrollbar">
        <Header gyms={data?.gyms} />
        <div className="home-wrapper">
          <section className="flex justify-between px-16 py-40 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">Contact Us here</h2>
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

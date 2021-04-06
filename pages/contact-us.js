import Head from "next/head";
import getConfig from "next/config";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const { publicRuntimeConfig } = getConfig();

export default function ContactUs({ gyms }) {
  return (
    <div>
      <Head>
        <title>Rillfit - Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className="sleek-scrollbar">
        <Header gyms={gyms} />
        <div className="home-wrapper">
          <section>
            <span>Contact Us</span>
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

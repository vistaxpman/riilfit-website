import Head from "next/head";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rillfit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        {/* <Carousel />
        <Footer /> */}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

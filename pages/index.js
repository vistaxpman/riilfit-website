import Head from "next/head";
import styled from "styled-components";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
            <div className="row1"></div>
          </section>
        </div>
        {/* <Footer /> */}
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
        height: 300px;
      }
    }
  }
`;

import Head from "next/head";
import getConfig from "next/config";
import styled from "styled-components";
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
                    <span>Our Clients</span>
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
                </div>
              </div>
            </div>
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
        height: 400px;
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
          padding: 10% 10%;
        }

        &-content {
          display: flex;
          background: red;
          flex-direction: column;

          .left-column {
            display: flex;
            background: red;
            flex-direction: column;
          }
        }
      }
    }
  }
`;

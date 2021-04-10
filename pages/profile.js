import { useState, useEffect } from "react";
import Head from "next/head";
import getConfig from "next/config";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import AccountCircleIcon from "mdi-react/AccountCircleIcon";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { combineData } from "../utils";
import { getClient } from "../services/ClientServices";

const { publicRuntimeConfig } = getConfig();

export default function Profile() {
  const [cookies, setCookie] = useCookies() || {};
  let { id, email } = cookies?.user || {};

  const [data, setData] = useState({
    gyms: [],
    isLoading: true,
    id,
    email,
  });

  //   console.log(cookies?.user);

  useEffect(() => {
    handleFetchGyms();
  }, []);

  useEffect(() => {
    handleFetchClient();
  }, [id, email]);

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

  const handleFetchClient = async () => {
    await getClient({ id, email })
      .then((response) => {
        if (response && response?.success) {
          const payload = response?.payload;
          setData(combineData(data, { isLoading: false, payload }));
        } else {
          setData(combineData(data, { isLoading: false }));
        }
      })
      .catch((error) => {
        console.error(error);
        setData(combineData(data, { isLoading: false }));
      });
  };

  return (
    <div>
      <Head>
        <title>Rillfit - Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className="sleek-scrollbar">
        <Header gyms={data?.gyms} />
        <div className="home-wrapper">
          {data?.isLoading ? (
            <section className="flex justify-between px-16 py-40 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-extrabold">Please wait...</h2>
            </section>
          ) : !data?.isLoading && !data?.payload ? (
            <section className="flex justify-between px-16 py-40 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-extrabold">
                Sorry! We couldn't find this profile.
              </h2>
            </section>
          ) : (
            <section className="flex justify-between px-16 py-40">
              <div className="w-3/10 shadow-md py-8 px-8 flex flex-col items-center">
                <AccountCircleIcon className="h-24 w-24 text-gray-800" />
                <span className="font-medium text-lg">{data?.payload?.client?.name}</span>
                <span className="font-medium">{data?.payload?.client?.email}</span>
                <span className="font-medium">{data?.payload?.client?.phonenumber}</span>
                <span>{data?.payload?.client?.address}</span>
              </div>
            </section>
          )}
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

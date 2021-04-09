import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import getConfig from "next/config";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { usePaystackPayment } from "react-paystack";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { combineData, getImage } from "../../utils";
import { getSelectedGym } from "../../services/GymServices";

const { publicRuntimeConfig } = getConfig();

export default function Gym() {
  const router = useRouter();
  const [data, setData] = useState({
    selectedPlan: null,
    gyms: [],
    isLoading: true,
    payload: null,
  });

  const [cookies, setCookie] = useCookies() || {};

  const handleSelectPlan = (selectedPlan) => {
    setData(combineData(data, { selectedPlan }));
  };

  useEffect(() => {
    handleFetchGyms();
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    handleFetchSelectedGym();
  }, [router.isReady]);

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

  const handleFetchSelectedGym = async () => {
    const { tag } = router?.query;
    await getSelectedGym({ tag })
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

  const checkUserLogin = () => {
    return cookies && cookies?.user;
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const PaystackButton = () => {
    const { email } = cookies?.user || {};

    const config = {
      reference: new Date().getTime(),
      email,
      amount: getAmount(),
      publicKey: publicRuntimeConfig.PAYSTACK_PUBLIC_KEY,
    };

    const initializePayment = usePaystackPayment(config);

    return (
      <div className="flex justify-center">
        <button
          className={`w-48 py-3 rounded-md bg-custom-104 text-black ${
            data?.selectedPlan
              ? "text-white cursor-pointer"
              : "opacity-50 bg-opacity-50 cursor-not-allowed"
          }`}
          onClick={() => {
            if (checkUserLogin()) {
              initializePayment(onSuccess);
            } else {
              setData(combineData(data, { isAuthVisible: true }));
            }
          }}
        >
          Continue
        </button>
      </div>
    );
  };

  const getAmount = () => {
    let num = data?.selectedPlan?.price || 0;
    num = num * 100;
    return num;
  };

  return (
    <div>
      <Head>
        <title>Rillfit - Gym</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className="sleek-scrollbar">
        <Header gyms={data?.gyms} isAuthVisible={data?.isAuthVisible} />
        <div className="home-wrapper">
          {data?.isLoading ? (
            <section className="flex justify-between px-16 py-40 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-extrabold">Please wait...</h2>
            </section>
          ) : !data?.isLoading && !data?.payload ? (
            <section className="flex justify-between px-16 py-40 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-extrabold">
                Sorry! We couldn't find this gym.
              </h2>
            </section>
          ) : (
            <>
              <section className="flex justify-between px-16 py-40">
                <div className="w-1/3.5 flex flex-col">
                  <img
                    className="h-64 w-full mb-2"
                    src={getImage(data?.payload?.gymBanners[0]?.image_url)}
                  />
                  <div className="flex justify-between">
                    <img
                      className="w-3/6 h-48"
                      src={getImage(data?.payload?.gymBanners[1]?.image_url)}
                    />
                    <img
                      className="w-3/6 h-48"
                      src={getImage(data?.payload?.gymBanners[2]?.image_url)}
                    />
                  </div>
                </div>
                <div className="w-3/5 shadow-md py-8 px-8">
                  <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-2xl font-medium">
                      {data?.payload?.gym?.name}
                    </h2>
                    <span>{data?.payload?.gym?.address}</span>
                    <span className="font-medium">
                      {data?.payload?.gym?.email}
                    </span>
                    <span className="font-medium">
                      {data?.payload?.gym?.phonenumber}
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-between mb-20">
                    {data?.payload?.plans?.map((plan, index) => (
                      <div
                        onClick={() => handleSelectPlan(plan)}
                        key={index}
                        className={`w-3/10 h-32 flex flex-col items-center justify-center border-1 rounded-md mb-6 cursor-pointer ${
                          data?.selectedPlan?.id === plan?.id
                            ? "text-white border-custom-104 bg-custom-104"
                            : "text-black border-gray-300 bg-white"
                        }`}
                      >
                        <span className="text-xl mb-2 capitalize">
                          {plan?.duration}
                        </span>
                        <span className="font-normal">₦{plan?.price}</span>
                      </div>
                    ))}
                  </div>
                  <PaystackButton />
                </div>
              </section>
            </>
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

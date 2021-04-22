import { useState, useEffect } from "react";
import Head from "next/head";
import getConfig from "next/config";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineSmile,
} from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import styled from "styled-components";

export default function Nhood() {
  return (
    <div>
      <Head>
        <title>Rillfit - Nhood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className="sleek-scrollbar">
        <header className="h-20 bg-black fixed top-0 w-full flex items-center z-10">
          <img
            className="mx-auto w-16 h-16 object-contain"
            src="/assets/homepage/nhood-logo.svg"
          />
          <nav className="ml-auto mr-12">
            <ul className="flex items-center text-sm">
              <li className="text-white ml-10">Home</li>
              <li className="text-white ml-10">
                <a href="#services">Services</a>
              </li>
              <li className="text-white ml-10">Make a Bookings</li>
              <li className="text-white ml-10">Contact</li>
              <li className="border-1 border-custom-104 text-custom-104 px-6 py-1 rounded-sm ml-10">
                Login
              </li>
            </ul>
          </nav>
        </header>
        <section className="pt-20">
          <div className="relative w-full h-128">
            <img
              className="mx-auto w-full h-full object-cover"
              src="/assets/homepage/banner-image.jpg"
            />
            <div className="absolute flex flex-col top-0 mt-28 ml-28 w-3/10">
              <h2 className="text-white text-5xl font-bold uppercase leading-10">
                Challenge
              </h2>
              <h2 className="text-white text-5xl font-bold uppercase">
                Yourself
              </h2>
              <h2 className="text-sm text-white mb-6">
                Our rigs are used by serious gyms for serious fitness. We take
                training to the next level with bespoke cooperative service,
                design and fit out to ensure your gym is filled with the best
                possible rig equipment to your specifications.
              </h2>
              <div className="flex items-center">
                <button className="flex justify-center items-center rounded-full w-40 py-2 text-white bg-custom-106 mr-8">
                  Get Started
                </button>
                <button className="flex justify-center items-center rounded-full w-40 py-2 text-white border-1 border-custom-106">
                  Make a Booking
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 bg-custom-106 h-80 flex justify-center items-center">
              <div className="flex flex-col w-1/2.5">
                <span className="text-3xl font-bold text-white uppercase leading-8 mb-4">
                  Membership start from NGN8,000/m
                </span>
                <span className="text-sm text-white mb-4">
                  We make fitness fun, effective and simple. Our coaches lead
                  the fitness industry when it comes to helping people get into
                  the best shape of their lives and reaching
                </span>
                <button className="text-white bg-black w-40 rounded-full py-3">
                  Book Now
                </button>
              </div>
            </div>
            <div className="w-1/2 bg-black h-80 flex justify-center items-center">
              <div className="flex flex-col w-1/2.5">
                <span className="text-3xl font-bold text-white uppercase leading-8 mb-4">
                  Join Today &amp; Get some of Free package
                </span>
                <span className="text-sm text-white mb-4">
                  We make fitness fun, effective and simple. Our coaches lead
                  the fitness industry when it comes to helping people get into
                  the best shape of their lives and reaching
                </span>
                <button className="text-white bg-custom-106 w-40 rounded-full py-3">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-7/10 flex items-center py-20">
              <div className="w-1/2 flex flex-col">
                <h2 className="text-3xl font-bold uppercase leading-8 mb-8">
                  ABOUT US
                </h2>
                <span className="text-gray-700 leading-6 mb-6 mr-2">
                  Our rigs are used by serious gyms for serious fitness. We take
                  training to the next level with bespoke cooperative service,
                  design and fit out to ensure your gym is filled with the best
                  possible rig equipment to your specifications. Our rigs are
                  used by serious gyms for serious fitness. We take training to
                  the next level with bespoke cooperative service, design and
                  fit out to ensure your gym
                </span>
                <button className="text-white bg-custom-106 w-40 rounded-full py-3">
                  Read More
                </button>
              </div>
              <div className="w-1/2 flex relative">
                <img
                  className="w-80 h-80 object-contain z-10"
                  src="/assets/nhood/about-us.svg"
                />
                <div className="w-56 h-80 bg-custom-106 absolute -top-1 left-4"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center" id="services">
            <h2 className="text-3xl font-bold uppercase leading-8 mb-8">
              Our Services
            </h2>
            <span className="w-2/5 text-center text-gray-700 leading-5 mb-16">
              Our services covers a wide range of gym &amp; spa activites which
              includes pool, party, children gym and dancing.
            </span>
            <div className="flex flex-wrap w-4/5 mx-auto">
              <div className="w-1/3 h-64 relative">
                <img
                  className="w-full h-64 object-cover"
                  src="/assets/nhood/services/services1.jpg"
                />
                <div className="absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
                  <span className="text-white font-bold">Pool Service</span>
                </div>
              </div>
              <div className="w-1/3 h-64 bg-black flex items-center justify-center">
                <div className="bg-custom-106 flex flex-col items-center justify-center h-4/5.5 w-4/5.5">
                  <span className="text-white font-bold text-md mb-4">
                    Gym &amp; Spa
                  </span>
                  <span className="text-white text-center text-sm">
                    Excepteur sint occaecat cupidatat non proident sunt iculpa
                    qui officia deserunt mollit anim est. laborum sed
                    perspiciatis unde omnis natus error sit voluptatem
                    accusantium dolore mque laudantium totam rem aperiam.
                  </span>
                </div>
              </div>
              <div className="w-1/3 h-64 relative">
                <img
                  className="w-full h-64 object-cover"
                  src="/assets/nhood/about-us.svg"
                />
                <div className="absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
                  <span className="text-white font-bold">Advanced Gym</span>
                </div>
              </div>
              <div className="w-1/3 h-64 bg-black flex items-center justify-center">
                <span className="text-white font-bold">Karoki Night</span>
              </div>
              <div className="w-1/3 h-64 relative">
                <img
                  className="w-full h-64 object-cover"
                  src="/assets/homepage/row3-img.svg"
                />
                <div className="absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
                  <span className="text-white font-bold">Ladies Wednesday</span>
                </div>
              </div>
              <div className="w-1/3 h-64 bg-black flex items-center justify-center">
                <span className="text-white">Table Tennis Court</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center py-24">
            <div className="w-1/2 flex justify-center mb-20">
              <div className="w-2.5/7 mr-10 flex justify-center items-center">
                <img
                  className="w-64 h-64 object-cover"
                  src="/assets/nhood/services/services2.jpg"
                />
              </div>
              <div className="w-2.5/7 flex flex-col justify-center">
                <h2 className="text-3xl font-bold leading-8 mb-8">
                  Yoga Classes
                </h2>
                <span className="text-sm">
                  Our rigs are used by serious gyms for serious fitness. We take
                  training to the next level with bespoke cooperative service,
                  design and fit out to ensure your gym is filled with the best
                  possible rig equipment to your specifications.
                </span>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="w-2.5/7 flex flex-col justify-center mr-10">
                <h2 className="text-3xl font-bold leading-8 mb-8">
                  Zumba Dance
                </h2>
                <span className="text-sm">
                  Our rigs are used by serious gyms for serious fitness. We take
                  training to the next level with bespoke cooperative service,
                  design and fit out to ensure your gym is filled with the best
                  possible rig equipment to your specifications.
                </span>
              </div>
              <div className="w-2.5/7 flex justify-center items-center">
                <img
                  className="w-64 h-64 object-cover"
                  src="/assets/nhood/services/services3.png"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/5 h-80 bg-custom-106 flex flex-col items-center justify-center text-white">
              <h3 className="uppercase text-2xl font-bold mb-6">
                UPCOMING events
              </h3>
              <span className="text-sm w-1/2 leading-5">
                We provide you with upcoming events here, our events such as
                Karoke Night, Ladies night, Walkout day, Pool party and lots
                more.
              </span>
            </div>
            <div className="w-2/5 h-80 flex">
              <div className="h-full w-16 bg-custom-106"></div>
            </div>
          </div>
          <div className="flex items-center justify-center h-72 bg-black">
            <div className="flex flex-col items-center mr-20">
              <AiOutlineClockCircle className="text-custom-106 h-10 w-10 mb-3" />
              <span className="text-white font-bold text-2xl mb-3">2314</span>
              <span className="text-white text-sm">Working Hours</span>
            </div>
            <div className="flex flex-col items-center mr-20">
              <MdFavoriteBorder className="text-custom-106 h-10 w-10 mb-3" />
              <span className="text-white font-bold text-2xl mb-3">314</span>
              <span className="text-white text-sm">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center mr-20">
              <AiOutlineStar className="text-custom-106 h-10 w-10 mb-3" />
              <span className="text-white font-bold text-2xl mb-3">214</span>
              <span className="text-white text-sm">Winning Award</span>
            </div>
            <div className="flex flex-col items-center mr-20">
              <AiOutlineSmile className="text-custom-106 h-10 w-10 mb-3" />
              <span className="text-white font-bold text-2xl mb-3">231</span>
              <span className="text-white text-sm">Satisfied Clients</span>
            </div>
          </div>
          <div className="flex flex-col items-center py-24" id="pricing">
            <h2 className="text-3xl font-bold uppercase leading-8 mb-8">
              Pricing
            </h2>
            <span className="w-2/5 text-center text-gray-700 leading-5 mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis convallis ligula. Quisque malesuada enim at neque finibus
              sollicitudin.
            </span>
            <div className="w-7/10 grid grid-cols-4 gap-x-4">
              <div className="flex flex-col items-center py-6 rounded-md border-1 border-gray-100">
                <span className="text-sm font-bold mb-6">Daily</span>
                <div className="flex mb-10">
                  <span className="text-xs font-bold">NGN</span>
                  <span className="text-2xl font-bold">1000</span>
                </div>
                <div className="flex flex-col items-center opacity-80 text-sm mb-10">
                  <span className="mb-2">1 Day a Week</span>
                  <span className="mb-2">GYM Access &amp; Equipment </span>
                  <span className="mb-2">Personal Trainer </span>
                  <span className="">Get Suplement</span>
                </div>
                <button className="uppercase text-sm bg-custom-106 text-white rounded-full px-8 py-3">
                  Join Now
                </button>
              </div>
              <div className="flex flex-col items-center py-6 rounded-md border-1 border-custom-106">
                <span className="text-sm font-bold mb-6">Weekly</span>
                <div className="flex mb-10">
                  <span className="text-xs font-bold">NGN</span>
                  <span className="text-2xl font-bold">4000</span>
                </div>
                <div className="flex flex-col items-center opacity-80 text-sm mb-10">
                  <span className="mb-2">7 Day a Week</span>
                  <span className="mb-2">GYM Access &amp; Equipment </span>
                  <span className="mb-2">Personal Trainer </span>
                  <span className="">Get Suplement</span>
                </div>
                <button className="uppercase text-sm bg-custom-106 text-white rounded-full px-8 py-3">
                  Join Now
                </button>
              </div>
              <div className="flex flex-col items-center py-6 rounded-md border-1 border-gray-100">
                <span className="text-sm font-bold mb-6">Montly/Premium</span>
                <div className="flex mb-10">
                  <span className="text-xs font-bold">NGN</span>
                  <span className="text-2xl font-bold">8000</span>
                </div>
                <div className="flex flex-col items-center opacity-80 text-sm mb-10">
                  <span className="mb-2">31 Day a Week</span>
                  <span className="mb-2">GYM Access &amp; Equipment </span>
                  <span className="mb-2">Personal Trainer </span>
                  <span className="">Get Suplement</span>
                </div>
                <button className="uppercase text-sm bg-custom-106 text-white rounded-full px-8 py-3">
                  Join Now
                </button>
              </div>
              <div className="flex flex-col items-center py-6 rounded-md border-1 border-gray-100">
                <span className="text-sm font-bold mb-6">Montly/Exclusive</span>
                <div className="flex mb-10">
                  <span className="text-xs font-bold">NGN</span>
                  <span className="text-2xl font-bold">12000/Month</span>
                </div>
                <div className="flex flex-col items-center opacity-80 text-sm mb-10">
                  <span className="mb-2">On order</span>
                  <span className="mb-2">GYM Access &amp; Equipment </span>
                  <span className="mb-2">Personal Trainer </span>
                  <span className="">Get Suplement</span>
                </div>
                <button className="uppercase text-sm bg-custom-106 text-white rounded-full px-8 py-3">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </section>
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

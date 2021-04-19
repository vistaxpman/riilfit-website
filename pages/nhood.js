import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import getConfig from "next/config";
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
              <li className="text-white ml-10">Services</li>
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
              <span className="text-white text-5xl font-bold uppercase leading-10">
                Challenge
              </span>
              <span className="text-white text-5xl font-bold uppercase">
                Yourself
              </span>
              <span className="text-sm text-white mb-6">
                Our rigs are used by serious gyms for serious fitness. We take
                training to the next level with bespoke cooperative service,
                design and fit out to ensure your gym is filled with the best
                possible rig equipment to your specifications.
              </span>
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

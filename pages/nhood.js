import { useState, useEffect } from "react";
import Head from "next/head";
import getConfig from "next/config";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineSmile,
} from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { TiLocation, TiSocialTwitterCircular } from "react-icons/ti";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
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
              <li className="text-white ml-10">
                <a href="#pricing">Make a Booking</a>
              </li>
              <li className="text-white ml-10">Contact</li>
              <li className="border-1 border-custom-104 text-custom-104 px-6 py-1 rounded-sm ml-10">
                Login
              </li>
            </ul>
          </nav>
        </header>
        <div className="pt-20">
          <section className="relative w-full h-128">
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
          </section>
          <section className="flex">
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
          </section>
          <section className="flex justify-center">
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
          </section>
          <section className="flex flex-col items-center" id="services">
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
          </section>
          <section className="w-full flex flex-col items-center py-24">
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
          </section>
          <section className="flex">
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
          </section>
          <section className="flex items-center justify-center h-72 bg-black">
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
          </section>
          <section className="flex flex-col items-center py-24" id="pricing">
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
          </section>
          <section className="h-100 flex">
            <div className="w-1/2 bg-black flex items-center justify-center">
              <div className="flex flex-col w-1/2">
                <span className="text-white text-sm mb-6">
                  Join over 15,000+ to use RiilfitApp App
                </span>
                <h2 className="text-custom-106 text-3xl font-bold mb-4">
                  Download Riilfiit <br /> today to get started
                </h2>
                <span className="text-white opacity-80 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </span>
                <div className="flex justify-between">
                  <div className="flex bg-white rounded-sm w-36 h-12 items-center justify-center">
                    <IoLogoGooglePlaystore className="h-6 w-6 mr-2 text-custom-106" />
                    <div className="flex flex-col rounded-md">
                      <span className="text-xs font-medium opacity-70">
                        Get Riilfit on
                      </span>
                      <span className="font-bold">Google Play</span>
                    </div>
                  </div>

                  <div className="flex bg-white rounded-sm w-36 h-12 items-center justify-center">
                    <IoLogoGooglePlaystore className="h-6 w-6 mr-2 text-custom-106" />
                    <div className="flex flex-col rounded-md">
                      <span className="text-xs font-medium opacity-70">
                        Get Riilfit on
                      </span>
                      <span className="font-bold">App Store</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-custom-107 flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                src="/assets/nhood/services/app_screenshot.png"
              />
            </div>
          </section>
          <section className="flex justify-center py-48">
            <div className="flex w-4/6">
              <div className="w-1/2 flex flex-wrap">
                <img
                  className="h-48 w-1/2 object-cover"
                  src="/assets/nhood/services/services5.jpg"
                />
                <img
                  className="h-48 w-1/2 object-cover"
                  src="/assets/nhood/services/services4.jpg"
                />
                <img
                  className="h-48 w-1/2 object-cover"
                  src="/assets/homepage/banner-image.jpg"
                />
                <img
                  className="h-48 w-1/2 object-cover"
                  src="/assets/nhood/services/services2.jpg"
                />
              </div>
              <img
                className="h-96 w-1/2 object-cover"
                src="/assets/nhood/about-us.svg"
              />
            </div>
          </section>
          <section className="flex flex-col justify-center items-center py-24 bg-custom-107">
            <div className="w-1/2 text-center mb-16">
              “Etiam maximus, justo ut pellentesque egestas, erat sapien mollis
              massa, nec porta nisl quam eu arcu. Donec sit amet congue lectus.
              Quisque molestie consectetur efficitur. Nullam egestas, tellus
              vitae suscipit elementum.”
            </div>
            <div className="flex items-center mb-10">
              <img
                className="h-12 w-12 rounded-full object-cover mr-12"
                src="https://images.unsplash.com/photo-1582328555849-f56e78425d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=393&q=80"
              />
              <img
                className="h-12 w-12 rounded-full object-cover mr-12"
                src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <img
                className="h-16 w-16 rounded-full object-cover mr-12"
                src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
              />
              <img
                className="h-12 w-12 rounded-full object-cover mr-12"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1576695444267-40cdd214f06e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm">Esther Onaoh</span>
              <span className="text-sm">Director</span>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center bg-contact h-144 w-full">
            <form className="h-8/10 w-1/2 bg-white shadow-md rounded-md flex flex-col items-center justify-center py-10">
              <h2 className="text-3xl font-bold uppercase leading-8 mb-4">
                Contact
              </h2>
              <span className="opacity-70 w-4/5 text-center mb-8">
                You need a team that listens; one that meticulously travels deep
                into your mind to understand your needs and craft solutions that
                make you stand out in your industry.
              </span>
              <div className="flex justify-between w-8/10 mb-4">
                <input
                  placeholder="Name"
                  className="w-2.5/5 h-10 bg-custom-107 rounded-md px-2"
                />
                <input
                  placeholder="Email"
                  className="w-2.5/5 h-10 bg-custom-107 rounded-md px-2"
                />
              </div>
              <textarea
                className="bg-custom-107 w-8/10 h-24 border-none resize-none mb-6"
                placeholder="Message"
              ></textarea>
              <button className="bg-custom-106 text-white h-12 w-36 items-center justify-center rounded-full">
                Read More
              </button>
            </form>
          </section>
          <footer className="bg-black flex justify-center py-20 px-48">
            <div className="flex flex-col w-3/10 mr-16">
              <span className="text-white font-bold text-sm mb-4">
                Get In Touch
              </span>
              <div className="flex items-start mb-4">
                <TiLocation className="h-12 w-12 mr-2 text-custom-106" />
                <span className="text-white opacity-40">
                  2 Alhaji Estate, Water Gate Hotel Opposite Obio Akpo LGA
                  Council HQ Obio Akpo
                </span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="h-4 w-4 mr-2 text-custom-106" />
                <span className="text-white opacity-40">+2349022169861</span>
              </div>
            </div>
            <div className="flex flex-col w-1/5 mr-16">
              <span className="text-white font-bold text-sm mb-4">
                Follow Us
              </span>
              <div className="flex items-center">
                <FaFacebookF className="h-8 w-8 px-2 py-2 items-center justify-center border-1 border-gray-900 rounded-full mr-3 text-custom-108" />
                <FaTwitter className="h-8 w-8 px-2 py-2 items-center justify-center border-1 border-gray-900 rounded-full mr-3 text-custom-108" />
                <FaInstagram className="h-8 w-8 px-2 py-2 items-center justify-center border-1 border-gray-900 rounded-full mr-3 text-custom-108" />
                <FaYoutube className="h-8 w-8 px-2 py-2 items-center justify-center border-1 border-gray-900 rounded-full text-custom-108" />
              </div>
            </div>
            <div className="flex flex-col w-3/10">
              <span className="text-white font-bold text-sm mb-4">
                Newsletter
              </span>
              <span className="text-white opacity-40 mb-4">
                Etiam maximus, justo ut pellentesque egestas, erat sapien mollis
                massa, nec porta nisl quam eu arcu.
              </span>
              <input
                placeholder="Your Email"
                className="h-10 text-sm rounded-md mb-4 px-2 bg-gray-700 bg-opacity-20 border-1 border-gray-900 border-opacity-70 text-gray-500"
              />
              <button className="bg-custom-106 text-white h-10 w-24 items-center justify-center rounded-full">
                Send
              </button>
            </div>
          </footer>
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

  .bg-contact {
    background-image: url("/assets/nhood/contact-us.svg");
  }
`;

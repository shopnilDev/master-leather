"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "@/components/Carousel";
import Order from "@/components/order";
import { walletData } from "@/app/database/wallet";

export default function Home() {
  const orderSectionRef = useRef(null);

  const {
    header,
    video,
    wayToIdentifyOriginalLeather,
    carouselSection,
    features,
    productInfo,
    pricing,
  } = walletData;

  const scrollToOrderSection = () => {
    orderSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative  text-white">
        {/* Background Image with proper styling */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${header.backgroundImage}')`,
            filter: "brightness(0.3)",
          }}
        />
        {/* Content */}
        <div className="relative max-w-[1150px] mx-auto px-4 pt-7 pb-16 text-center">
          <div
            data-aos="fade-down"
            className="mx-auto w-40 h-40 rounded-full bg-white mb-6 "
          >
            <Image
              src={header?.logo}
              alt="Anon Logo"
              width={150}
              height={150}
              className="6 w-36 h-36 rounded-full  "
            />
          </div>

          <div
            data-aos="fade-right"
            className="mb-7 rounded-2xl border-4 border-white bg-black/80 py-4 backdrop-blur-sm"
          >
            <h1 className="text-[32px] font-bold leading-10">
              {header?.title}
            </h1>
          </div>

          <p
            data-aos="fade-left"
            className="mb-8 text-2xl font-bold leading-9  rounded-lg backdrop-blur-sm"
          >
            {header?.description}
          </p>

          <div data-aos="fade-up">
            <button
              onClick={scrollToOrderSection}
              className="text-white text-[24px] sm:text-[32px] font-bold rounded-3xl border-4 border-white 
          bg-[#037710] px-10 py-4 leading-8  
          shadow-lg hover:scale-90 transition-transform duration-300 "
            >
              {header?.buttonText}
            </button>
          </div>
        </div>
      </header>

      {/* Header End */}

      {/* Video Section Start */}
      <section className="max-w-[1150px] mx-auto px-4 py-8 ">
        <div className="flex justify-center ">
          <span
            className="mb-8 text-center text-3xl text-white font-bold
           bg-black py-4 px-6 drop-shadow-2xl rounded-xl leading-9 "
          >
            {video?.title}
          </span>
        </div>
        <div className="aspect-video w-full overflow-hidden  bg-gray-200">
          <iframe
            src={video?.videoUrl}
            allowFullScreen
            className="h-full w-full"
            title="Video Title"
          ></iframe>
        </div>
      </section>
      {/* Video Section End */}

      {/* way of find original lather */}
      <section className="max-w-[1150px] px-4  mx-auto ">
        <div className="rounded-lg border-2 border-black px-3">
          <div
            className="rounded-md text-black text-[26px] bg-[#8395A4] py-3 my-7  border-4 border-black 
         text-center leading-8"
          >
            <span className="text-white text-center font-extrabold">
              {wayToIdentifyOriginalLeather?.title}
            </span>
          </div>

          <div className="pb-2 text-[#2E2D2E] font-[500]  text-lg sm:text-xl leading-9">
            {wayToIdentifyOriginalLeather?.points.map((point, i) => (
              <div key={i} className="flex gap-2">
                <div className="space-x-2 ">
                  <Image
                    src="/images/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                    className="inline"
                  />

                  <span className="">{point}</span>
                </div>
              </div>
            ))}

            {/* <div className="flex gap-2">
              <div className="space-x-2 ">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />
                <span>
                  কৃত্রিম চামড়া বা বেন্ডিনে সাধারণত কোন না কোন কাপড় ব্যবহার
                  করে তার উপর পলিমার দিয়ে কোটিং করা হয়ে থাকে। আর এ জন্য
                  কৃত্রিম চামড়ায় তৈরি পন্যটি গুটানোলেই কাপড়ের আস্তরণ পাওয়া
                  যায়। কিন্তু চামড়ার তৈরি পন্য এমন কিছু দেখা যায় না।
                </span>
              </div>
            </div>

            <div className="flex  gap-2">
              <div className="space-x-2 ">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />
                <span>
                  ফায়ার টেস্ট অথবাৎ আগুনে পোড়ালে সহজে জ্বলবে না, গলবে না থাকবে
                  অক্ষত
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="bg-[#D5E4E8] px-4 py-8 mt-12">
        <div className="max-w-[1150px] mx-auto ">
          <div data-aos="fade-up" className="flex justify-center ">
            <button
              onClick={scrollToOrderSection}
              className="mb-4 sm:mb-8 text-center text-[24px] sm:text-[32px] leading-6 sm:leading-8 text-white font-extrabold
           bg-[#FF7400] hover:bg-[#037710] hover:scale-90 transition-transform duration-300 py-4 px-12 drop-shadow-2xl rounded-md border-4 border-black "
            >
              {carouselSection?.title}
            </button>
          </div>

          <div className="">
            <Carousel carouselSection={carouselSection} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[1150px] mx-auto px-4 py-8">
        <div
          className="rounded-md text-black  bg-[#8395A4] py-3 my-7  border-4 border-black 
         text-center"
        >
          <span className="text-[#000000] text-center font-bold text-[24px] sm:text-[32px] leading-8 ">
            {features?.title}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-[#2E2D2E] font-[500] text-xl leading-6">
          {features?.featuresList.map((text, index) => (
            <div
              key={index}
              className="rounded-md bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_6px_8px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] max-w-lg mx-auto"
            >
              <p className="text-center">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Info Section */}
      <section className="bg-[#D5E4E8] mx-auto px-4 py-8 sm:py-12  sm:mt-3">
        <div data-aos="fade-up" className="flex justify-center ">
          <button
            onClick={scrollToOrderSection}
            className="mb-4 sm:mb-8  text-center text-[24px] sm:text-[32px] text-white font-bold
           bg-[#FF1E00] hover:bg-[#037710] hover:scale-90 transition-transform duration-300 py-4 px-12 drop-shadow-2xl
            rounded-md border-4 border-black leading-6 sm:leading-8 "
          >
            {productInfo?.button_1.buttonText}
          </button>
        </div>
        <div className="flex justify-center ">
          <h2
            className="mb-8 text-center text-[24px] sm:text-[26px]  font-semibold
           bg-[#788F9F] py-3  px-8 drop-shadow-2xl rounded-md border-4 border-black leading-6 sm:leading-8 "
          >
            {productInfo?.title}
            {/* ANON LEATHER
            <span className="text-white"> থেকে কেন অর্ডার করবেন?</span> */}
          </h2>
        </div>
        <div
          className="max-w-[1150px] mx-auto border-2 border-black rounded-lg shadow-2xl "
          style={{ boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="flex flex-col-reverse md:flex-row px-3 py-8 ">
            <div className="mt-2 md:mt-0 md:pr-12 w-full  md:w-3/5 font-[500] text-lg sm:text-xl leading-9">
              {productInfo?.points.map((point, i) => (
                <div key={i} className="space-x-2 ">
                  <Image
                    src="/images/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                    className="inline"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="relative w-full md:w-2/5 h-80 flex items-center justify-center">
              <Image
                src="/images/img.webp"
                alt="Product Features"
                fill
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 ">
          <div data-aos="fade-up">
            <button
              onClick={scrollToOrderSection}
              className="text-center text-[24px] sm:text-[32px] text-white font-bold
           bg-[#FF7400] hover:bg-[#037710] hover:scale-90 transition-transform duration-300  py-4 px-8 drop-shadow-2xl rounded-md
            border-4 border-black leading-6 sm:leading-8 "
            >
              {productInfo?.button_2?.buttonText}
              {/* স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন */}
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-[1150px] mx-auto px-4 ">
        <div className="border-2 border-black rounded-md shadow-2xl px-4 py-6 sm:py-10 mt-8 sm:mt-10">
          <div className="flex  justify-center">
            <h2 className="mb-4  sm:mb-8 text-[24px] sm:text-[32px] text-center bg-black py-3 w-full  text-white font-bold rounded-md leading-10">
              প্রাইস
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2  text-[#FF0000] text-[26px] font-bold leading-6 sm:leading-8">
            <div
              className="rounded-md bg-[#DCD6E7] py-7 md:py-14 text-center "
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <h4>
                রেগুলার মূল্যঃ{" "}
                <span className="text-black">{pricing?.regularPrice}</span> টাকা
              </h4>
            </div>
            <div
              className="rounded-md bg-[#DCD6E7] py-7 md:py-14 text-center "
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <h4>
                অফারের মূল্যঃ{" "}
                <span className="text-black">{pricing?.offerPrice}</span> টাকা
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}

      {/* Order section */}
      <div
        ref={orderSectionRef}
        className="max-w-[1150px] mx-auto px-4 mt-10 md:mt-20"
      >
        <Order />
      </div>
    </div>
  );
}

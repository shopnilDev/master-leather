"use client";

import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "@/components/Carousel";
// import Order from "@/components/order";
import { walletData } from "@/app/database/wallet";
import useFetchData from "@/hooks/useFetchData";
import SkeletonLandingPage from "@/components/SkeletonLandingPage";
import { BASE_URL } from "@/helpers/BASE_URL";
import axiosInstance from "@/helpers/axiosInstance";
import dynamic from "next/dynamic";
import OrderTest from "@/components/OrderTest";
const Order = dynamic(() => import("@/components/order"), { ssr: false });

export default function Product({ params }) {
  const orderSectionRef = useRef(null);
  const slug = params?.slug;
  // const slug = React.use(params).slug;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const url = `${BASE_URL}/combo_product/combo-products/${slug}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(url);
        setData(res?.data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching product:", error.message);
      }
    };

    fetchProduct();
  }, [url]);

  const {
    header,
    video,
    wayToIdentifyOriginalLeather,
    carouselSection,
    features,
    productInfo,
    pricing,
  } = walletData;

  // console.log("single product", data);

  const scrollToOrderSection = () => {
    orderSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);

  if (loading) return <SkeletonLandingPage />;
  // if (error) return <p>Error: {error}</p>;

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
            <h1 className="text-[32px] font-bold leading-10">{data?.title}</h1>
          </div>

          <p
            data-aos="fade-left"
            className="mb-8 text-2xl font-bold leading-9  rounded-lg backdrop-blur-sm"
          >
            {data?.sub_title}
          </p>

          <div data-aos="fade-up">
            <button
              onClick={scrollToOrderSection}
              className="text-white text-[24px] sm:text-[32px] font-bold rounded-3xl border-4 border-white 
          bg-[#037710] px-10 py-4 leading-8  
          shadow-lg hover:scale-90 transition-transform duration-300 "
            >
              {data?.first_btn_text}
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
            {data?.video_section_title}
          </span>
        </div>
        <div className="aspect-video w-full overflow-hidden  bg-gray-200">
          <iframe
            src={data?.youtube}
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
              {data?.first_sub_title}
            </span>
          </div>

          <div className="pb-2 text-[#2E2D2E] font-[500]  text-lg sm:text-xl leading-9">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.first_description_title,
              }}
            />

            {/* {wayToIdentifyOriginalLeather?.points.map((point, i) => (
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
            ))} */}
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
              {data?.second_btn_text}
            </button>
          </div>

          <div className="">
            <Carousel
              images={data?.multiple_images}
              carouselSection={carouselSection}
            />
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
            {data?.second_sub_title}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-[#2E2D2E] font-[500] text-xl leading-6">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.second_description_title,
            }}
          />

          {/* {features?.featuresList.map((text, index) => (
            <div
              key={index}
              className="rounded-md bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_6px_8px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] max-w-lg mx-auto"
            >
              <p className="text-center">{text}</p>
            </div>
          ))} */}
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
            চামড়ার লং ওয়ালেট অর্ডার করুন
            {/* {data?.second_btn_text} */}
          </button>
        </div>
        <div className="flex justify-center ">
          <h2
            className="mb-8 text-center text-[24px] sm:text-[26px]  font-semibold
           bg-[#788F9F] py-3  px-8 drop-shadow-2xl rounded-md border-4 border-black leading-6 sm:leading-8 "
          >
            {data?.third_sub_title}
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
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.third_description_title,
                }}
              />
              {/* {productInfo?.points.map((point, i) => (
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
              ))} */}
            </div>
            <div className="relative w-full md:w-2/5 h-80 flex items-center justify-center">
              <Image
                //  src={data?.third_description_image}
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
              {data?.third_btn_text}
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
                <span className="text-black">{data?.regular_price}</span> টাকা
              </h4>
            </div>
            <div
              className="rounded-md bg-[#DCD6E7] py-7 md:py-14 text-center "
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <h4>
                অফারের মূল্যঃ{" "}
                <span className="text-black">{data?.offer_price}</span> টাকা
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
        {/* <OrderTest color_variations={data?.color_variations} /> */}
        <Order color_variations={data?.color_variations} />
      </div>
    </div>
  );
}

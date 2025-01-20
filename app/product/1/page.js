"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "@/components/Carousel";
import Order from "@/components/order";

// Sample JSON data (this will be replaced with an API call later)
const pageData = {
  header: {
    logo: "/images/logo.png",
    title: "দেশিয় পশুর চামড়ায় লং ওয়ালেট ব্যাবহার করুন !",
    description:
      "রেক্সিন বা আর্টিফিশিয়াল চামড়ায় অভ্যস্থ না হয়ে দেশিয় পশুর প্রসেসকৃত অরিজিনাল চামড়ার ব্র্যান্ড ওয়ালেট সংগ্রহ করুন এ্যানন লেদার থেকে।",
    buttonText: "অর্ডার করতে চাই",
    backgroundImage: "/images/bg.png",
  },
  video: {
    title: "ডাবল চেম্বার ওয়ালেট- LW104",
    videoUrl: "https://www.youtube.com/embed/kyYBA1fhcHI?si=L6TKqxv3pbEyMjCw",
  },
  wayToIdentifyOriginalLeather: {
    title: "অরজিনাল চামড়া চেনার উপায় কি?",
    points: [
      "প্রাকৃতিকভাবেই চামড়ায় থাকে ফাইবার। আর ঠিক সে কারণেই চামড়ার তৈরি পন্য অনেক দিনেই সেই ফাইবার দেখা যায়। কিন্তু কৃত্রিম চামড়া বা বেন্ডিনের তৈরি পন্য তেমনটি দেখা যায় না।",
      "কৃত্রিম চামড়া বা বেন্ডিনে সাধারণত কোন না কোন কাপড় ব্যবহার করে তার উপর পলিমার দিয়ে কোটিং করা হয়ে থাকে। আর এ জন্য কৃত্রিম চামড়ায় তৈরি পন্যটি গুটানোলেই কাপড়ের আস্তরণ পাওয়া যায়। কিন্তু চামড়ার তৈরি পন্য এমন কিছু দেখা যায় না।",
      "ফায়ার টেস্ট অথবাৎ আগুনে পোড়ালে সহজে জ্বলবে না, গলবে না থাকবে অক্ষত",
    ],
  },
  carouselSection: {
    buttonText: "চামড়ার লং ওয়ালেট অর্ডার করুন",
  },
  features: {
    title: "কেন এই চামড়ার ওয়ালেট ব্যবহার করবেন ?",
    featuresList: [
      "সম্পূর্ণ হ্যান্ডমেইড লং ওয়ালেট-টি পাঞ্জাবি-পায়জামা, ক্যাজুয়াল প্যান্টের সাথে অনায়াসে ব্যবহার করা যাবে।",
      "ওয়ালেট-এর আপার এবং লাইনিং-এ শুধুমাত্র র-চামড়া ব্যাবহার করায় দীর্ঘদিন ব্যাবহারে করা যাবে।",
      "ডাবল চেম্বার গেজেট পকেট থাকায় একসাথে ‍দুইটি মোবাইল ক্যারি করতে পারবেন । সেই সাথে চেইন পকেট এবং একাধিক কার্ড হোল্ডার পকেট থাকছেই।",
      "জেনুইন চামড়ার নিশ্চয়তায় থাকছে ৩৬৫ দিনের রিপ্লেসমেন্ট গ্যারান্টি ।",
    ],
  },
  productInfo: {
    title: "ANON LEATHER থেকে কেন অর্ডার করবেন?",
    points: [
      "চামড়া নয় প্রমাণে ক্যাশ ব্যাক গ্যারান্টি!",
      "পার্সেল হাতে পেয়ে টাকা পরিশোধের সুবিধা।",
      "সমগ্র বাংলাদেশে ডেলিভারি সার্ভিস।",
      "সরাসরি দেখার পর পছন্দ না হলে শুধুমাত্র কুরিয়ার চার্জ প্রদান সাপেক্ষে ফেরতযোগ্য।",
      "বড় ধরনের শো-রুম সেই সাথে অনেক বেশি কর্মচারি খরচ না থাকায় কোয়লিটি লং ওয়ালেট পাচ্ছেন বিশেষ মূল্যছাঁড়ে!",
      "৩৬৫ দিনের রিপ্লেসমেন্ট গ্যারান্টি!",
    ],
  },
  pricing: {
    regularPrice: 2595,
    offerPrice: 1150,
  },
  orderSection: {},
};

export default function Home() {
  const orderSectionRef = useRef(null);

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
      <header className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${pageData.header.backgroundImage}')`,
            filter: "brightness(0.3)",
          }}
        />
        <div className="relative max-w-[1150px] mx-auto px-4 pt-7 pb-16 text-center">
          <Image
            data-aos="fade-down"
            src={pageData.header.logo}
            alt="Anon Logo"
            width={150}
            height={150}
            className="mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm"
          />
          <div
            data-aos="fade-right"
            className="mb-7 rounded-2xl border-4 border-white bg-black/80 py-4 backdrop-blur-sm"
          >
            <h1 className="text-[32px] font-bold leading-10">
              {pageData.header.title}
            </h1>
          </div>
          <p
            data-aos="fade-left"
            className="mb-8 text-2xl font-bold leading-9 rounded-lg backdrop-blur-sm"
          >
            {pageData.header.description}
          </p>
          <div data-aos="fade-up">
            <button
              onClick={scrollToOrderSection}
              className="text-white text-[24px] sm:text-[32px] font-bold rounded-3xl border-4 border-white 
          bg-[#037710] px-10 py-4 leading-8  
          shadow-lg hover:scale-90 transition-transform duration-300 "
            >
              {pageData.header.buttonText}
            </button>
          </div>
        </div>
      </header>

      {/* Video Section Start */}
      <section className="max-w-[1150px] mx-auto px-4 py-8 ">
        <div className="flex justify-center ">
          <span
            className="mb-8 text-center text-3xl text-white font-bold
           bg-black py-4 px-6 drop-shadow-2xl rounded-xl leading-9 "
          >
            {pageData.video.title}
          </span>
        </div>
        <div className="aspect-video w-full overflow-hidden  bg-gray-200">
          <iframe
            src={pageData.video.videoUrl}
            allowFullScreen
            className="h-full w-full"
            title="Video Title"
          ></iframe>
        </div>
      </section>

      {/* Way to identify original leather */}
      <section className="max-w-[1150px] px-4  mx-auto ">
        <div className="rounded-lg border-2 border-black px-3">
          <div
            className="rounded-md text-black text-[26px] bg-[#8395A4] py-3 my-7  border-4 border-black 
         text-center leading-8"
          >
            <span className="text-white text-center font-extrabold">
              {pageData.wayToIdentifyOriginalLeather.title}
            </span>
          </div>
          <div className="pb-2 text-[#2E2D2E] font-[500]  text-lg sm:text-xl leading-9">
            {pageData.wayToIdentifyOriginalLeather.points.map(
              (point, index) => (
                <div key={index} className="flex gap-2">
                  <div className="space-x-2 ">
                    <Image
                      src="/images/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="inline"
                    />
                    <span>{point}</span>
                  </div>
                </div>
              )
            )}
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
           bg-[#FF7400] hover:bg-[#037710] hover:scale-90 transition-transform duration-300"
            >
              {pageData.carouselSection.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[1150px] mx-auto px-4 py-12 ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold">{pageData.features.title}</h2>
          <ul className="list-disc text-lg mt-8">
            {pageData.features.featuresList.map((feature, index) => (
              <li key={index} className="mb-4">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product Info Section */}
      <section className="max-w-[1150px] mx-auto px-4 py-12 ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold">{pageData.productInfo.title}</h2>
          <ul className="list-disc text-lg mt-8">
            {pageData.productInfo.points.map((point, index) => (
              <li key={index} className="mb-4">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-[1150px] mx-auto px-4 py-12 ">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Regular Price: {pageData.pricing.regularPrice} BDT
          </h2>
          <h3 className="text-xl text-red-500">
            Offer Price: {pageData.pricing.offerPrice} BDT
          </h3>
        </div>
      </section>

      {/* Order Section */}
      <section
        ref={orderSectionRef}
        className="max-w-[1150px] mx-auto px-4 py-12 "
      >
        <Order />
      </section>
    </div>
  );
}

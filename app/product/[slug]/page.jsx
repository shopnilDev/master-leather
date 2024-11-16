"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "@/components/Carousel";
import Order from "@/components/order";

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
      <header className="relative  text-white">
        {/* Background Image with proper styling */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg.png')",
            filter: "brightness(0.3)", // This creates the dark overlay effect
          }}
        />

        {/* Content */}
        <div className="relative max-w-[1150px] mx-auto px-4 pt-7 pb-16 text-center">
          <Image
            data-aos="fade-down"
            src="/images/logo.png"
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
              দেশিয় পশুর চামড়ায় লং ওয়ালেট ব্যাবহার করুন !
            </h1>
          </div>

          <p
            data-aos="fade-left"
            className="mb-8 text-2xl font-bold leading-9  rounded-lg backdrop-blur-sm"
          >
            রেক্সিন বা আর্টিফিশিয়াল চামড়ায় অভ্যস্থ না হয়ে দেশিয় পশুর
            প্রসেসকৃত অরিজিনাল চামড়ার ব্র্যান্ড ওয়ালেট সংগ্রহ করুন এ্যানন
            লেদার থেকে।
          </p>

          <div data-aos="fade-up">
            <button
              onClick={scrollToOrderSection}
              className="text-white text-[32px] font-bold rounded-3xl border-4 border-white 
          bg-[#037710] px-10 py-4 leading-8  
          shadow-lg hover:scale-90 transition-transform duration-300 "
            >
              অর্ডার করতে চাই
            </button>
          </div>
        </div>
      </header>

      {/* Video Section */}
      <section className="max-w-[1150px] mx-auto px-4 py-8 ">
        <div className="flex justify-center ">
          <span
            className="mb-8 text-center text-3xl text-white font-bold
           bg-black py-4 px-6 drop-shadow-2xl rounded-xl leading-9 "
          >
            ডাবল চেম্বার ওয়ালেট- LW104
          </span>
        </div>
        <div className="aspect-video w-full overflow-hidden  bg-gray-200">
          <iframe
            src="https://www.youtube.com/embed/kyYBA1fhcHI?si=L6TKqxv3pbEyMjCw"
            allowFullScreen
            className="h-full w-full"
            title="Video Title"
          ></iframe>
        </div>
      </section>
      {/* way of find original lather */}
      <section className="max-w-[1150px] px-4  mx-auto ">
        <div className="rounded-lg border-2 border-black px-3">
          <div
            className="rounded-md text-black text-[26px] bg-[#8395A4] py-3 my-7  border-4 border-black 
         text-center leading-8"
          >
            <span className="text-white text-center font-extrabold">
              অরজিনাল চামড়া
            </span>{" "}
            চেনার উপায় কি?
          </div>

          <div className="pb-2 text-[#2E2D2E] font-[500] text-xl leading-8">
            <div className="flex gap-2">
              <p className="space-x-2 ">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />

                <span className="">
                  প্রাকৃতিকভাবেই চামড়ায় থাকে ফাইবার। আর ঠিক সে কারণেই চামড়ার
                  তৈরি পন্য অনেক দিনেই সেই ফাইবার দেখা যায়। কিন্তু কৃত্রিম
                  চামড়া বা বেন্ডিনের তৈরি পন্য তেমনটি দেখা যায় না।
                </span>
              </p>
            </div>

            <div className="flex gap-2">
              <p className="space-x-2 ">
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
              </p>
            </div>

            <div className="flex  gap-2">
              <p className="space-x-2 ">
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
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="bg-[#D5E4E8] px-4 py-8 mt-12">
        <div className="max-w-[1150px] mx-auto ">
          <div data-aos="fade-up" className="flex justify-center ">
            <button
              onClick={scrollToOrderSection}
              className="mb-8 text-center text-[32px] leading-8 text-white font-extrabold
           bg-[#FF7400] hover:bg-[#037710] hover:scale-90 transition-transform duration-300 py-5 px-12 drop-shadow-2xl rounded-3xl border-4 border-black "
            >
              চামড়ার লং ওয়ালেট অর্ডার করুন
            </button>
          </div>

          <div className="">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[1150px] mx-auto px-4 py-8">
        <div
          className="rounded-3xl text-black  bg-[#8395A4] py-3 my-7  border-4 border-black 
         text-center"
        >
          <span className="text-[#000000] text-center font-bold text-[32px] leading-8 ">
            কেন এই চামড়ার ওয়ালেট ব্যবহার করবেন ?
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-[#2E2D2E] font-[500] text-xl leading-6">
          {[
            "সম্পূর্ণ হ্যান্ডমেইড লং ওয়ালেট-টি পাঞ্জাবি-পায়জামা, ক্যাজুয়াল প্যান্টের সাথে অনায়াসে ব্যবহার করা যাবে।",
            "ওয়ালেট-এর আপার এবং লাইনিং-এ শুধুমাত্র র-চামড়া ব্যাবহার করায় দীর্ঘদিন ব্যাবহারে করা যাবে।",
            "ডাবল চেম্বার গেজেট পকেট থাকায় একসাথে ‍দুইটি মোবাইল ক্যারি করতে পারবেন । সেই সাথে চেইন পকেট এবং একাধিক কার্ড হোল্ডার পকেট থাকছেই।",
            "জেনুইন চামড়ার নিশ্চয়তায় থাকছে ৩৬৫ দিনের রিপ্লেসমেন্ট গ্যারান্টি ।",
          ].map((text, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_6px_8px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] max-w-lg mx-auto"
            >
              <p className="text-center">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Info Section */}
      <section className="bg-[#D5E4E8] mx-auto px-4 py-12 mt-5">
        <div data-aos="fade-up" className="flex justify-center ">
          <button
            onClick={scrollToOrderSection}
            className="mb-8 text-center text-[32px] text-white font-bold
           bg-[#FF1E00] hover:bg-[#037710] hover:scale-90 transition-transform duration-300 py-4 px-12 drop-shadow-2xl rounded-3xl border-4 border-black leading-8 "
          >
            শেষ হবার আগেই অর্ডার করুন
          </button>
        </div>
        <div className="flex justify-center ">
          <h2
            className="mb-8 text-center text-[26px]  font-semibold
           bg-[#788F9F] py-3 px-8 drop-shadow-2xl rounded-xl border-4 border-black leading-8 "
          >
            ANON LEATHER
            <span className="text-white"> থেকে কেন অর্ডার করবেন?</span>
          </h2>
        </div>
        <div
          className="max-w-[1150px] mx-auto border-2 border-black rounded-lg shadow-2xl "
          style={{ boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="flex flex-col-reverse md:flex-row px-3 py-8 ">
            <div className=" pr-12 w-full  md:w-3/5 font-[500] text-xl leading-9">
              <p className="space-x-2 ">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />
                <span>চামড়া নয় প্রমাণে ক্যাশ ব্যাক গ্যারান্টি!</span>
              </p>

              <p className=" space-x-2">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />
                <span>পার্সেল হাতে পেয়ে টাকা পরিশোধের সুবিধা।</span>
              </p>

              <p className="space-x-2 ">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />
                <span>সমগ্র বাংলাদেশে ডেলিভারি সার্ভিস।</span>
              </p>

              <p className="space-x-2 ">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />
                <span>
                  সরাসরি দেখার পর পছন্দ না হলে শুধুমাত্র কুরিয়ার চার্জ প্রদান
                  সাপেক্ষে ফেরতযোগ্য।
                </span>
              </p>

              <p className="space-x-2">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />
                <span>
                  বড় ধরনের শো-রুম সেই সাথে অনেক বেশি কর্মচারি খরচ না থাকায়
                  কোয়লিটি লং ওয়ালেট পাচ্ছেন বিশেষ মূল্যছাঁড়ে!
                </span>
              </p>

              <p className="space-x-2 ">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="inline"
                />
                <span>৩৬৫ দিনের রিপ্লেসমেন্ট গ্যারান্টি!</span>
              </p>
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
              className="text-center text-[32px] text-white font-bold
           bg-[#FF7400] hover:bg-[#037710] hover:scale-90 transition-transform duration-300  py-4 px-8 drop-shadow-2xl rounded-3xl border-4 border-black leading-8 "
            >
              স্টক ফুরিয়ে যাবার আগেই অর্ডার করুন
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-[1150px] mx-auto px-4 ">
        <div className="border-2 border-black rounded-lg shadow-2xl px-4 py-10 mt-10">
          <div className="flex  justify-center">
            {/* <h2 className="text-[32px] text-center bg-black py-3 px-56 text-white font-bold rounded-xl leading-10">
            প্রাইস
          </h2> */}
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-4 text-[#FF0000] text-[26px] font-bold leading-8">
            <div
              className="rounded-lg bg-[#DCD6E7] py-7 md:py-14 text-center "
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <h4>
                রেগুলার মূল্যঃ <span className="text-black">২৫৯৫</span> টাকা
              </h4>
            </div>
            <div
              className="rounded-lg bg-[#DCD6E7] py-7 md:py-14 text-center "
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <h4>
                অফারের মূল্যঃ <span className="text-black">১১৫০</span> টাকা
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

      {/* Footer */}
      {/* <footer className="bg-black py-10 text-center  text-white mt-14">
        <div className="container mx-auto space-x-8 text-2xl leading-9 mb-5">
          <Link href="#" className="hover:underline">
            Refund policy
          </Link>
          <Link href="#" className="hover:underline">
            Privacy policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
        <h4 className="text-[10px] font-semibold leading-3">
          © 2023 Anonleather.Com | Copyright.
        </h4>
      </footer> */}
    </div>
  );
}

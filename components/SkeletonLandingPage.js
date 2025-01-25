"use client";

import React from "react";

export default function SkeletonLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Header Section Skeleton */}
      <header className="relative text-white">
        <div className="absolute inset-0 bg-gray-300" />
        <div className="relative max-w-[1150px] mx-auto px-4 pt-7 pb-16 text-center">
          <div className="mx-auto w-40 h-40 rounded-full bg-gray-300 mb-6"></div>
          <div className="mb-7 h-10 rounded-2xl bg-gray-300 mx-auto max-w-md"></div>
          <div className="mb-8 h-8 bg-gray-300 mx-auto max-w-lg rounded-lg"></div>
          <div>
            <button className="w-48 h-12 rounded-3xl bg-gray-300 mx-auto"></button>
          </div>
        </div>
      </header>

      {/* Video Section Skeleton */}
      <section className="max-w-[1150px] mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="h-10 w-64 bg-gray-300 rounded-xl"></div>
        </div>
        <div className="aspect-video w-full bg-gray-300 rounded-md"></div>
      </section>

      {/* Way to Identify Original Leather Skeleton */}
      <section className="max-w-[1150px] px-4 mx-auto">
        <div className="rounded-lg border-2 border-gray-300 px-3 py-7">
          <div className="h-10 bg-gray-300 rounded-md mx-auto max-w-lg"></div>
          <div className="mt-7 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-300 rounded-md"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel Skeleton */}
      <section className="bg-gray-200 px-4 py-8 mt-12">
        <div className="max-w-[1150px] mx-auto">
          <div className="flex justify-center mb-8">
            <div className="h-12 w-64 bg-gray-300 rounded-md"></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-40 bg-gray-300 rounded-md"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="max-w-[1150px] mx-auto px-4 py-8">
        <div className="h-10 bg-gray-300 rounded-md mx-auto max-w-md mb-8"></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-40 bg-gray-300 rounded-md shadow-md"
            ></div>
          ))}
        </div>
      </section>

      {/* Product Info Section Skeleton */}
      <section className="bg-gray-200 px-4 py-8">
        <div className="max-w-[1150px] mx-auto">
          <div className="h-10 bg-gray-300 rounded-md mx-auto max-w-md mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-40 bg-gray-300 rounded-md"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-6 bg-gray-300 rounded-md"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Skeleton */}
      <section className="max-w-[1150px] mx-auto px-4">
        <div className="border-2 border-gray-300 rounded-md shadow-md px-4 py-6">
          <div className="h-10 bg-gray-300 rounded-md mx-auto max-w-md mb-8"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-300 rounded-md"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Skeleton */}
      <div className="max-w-[1150px] mx-auto px-4 mt-10">
        <div className="h-64 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
}

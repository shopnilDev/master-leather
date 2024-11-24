"use client";

import { useState } from "react";
import Image from "next/image";
import { CircleCheck, LockKeyhole, Play } from "lucide-react";

// Product data (variant details and notes)
const productData = {
  variants: [
    {
      id: "black",
      name: "ANON Leather Long Wallet LW104 (Black)",
      price: 1150,
      imageSrc: "/images/black.webp",
    },
    {
      id: "chocolate",
      name: "ANON Leather Long Wallet LW104 (Chocolate)",
      price: 1150,
      imageSrc: "/images/chocolate.webp",
    },
  ],
  notes: [
    "Customer must have Credit/Debit card to be covered by our order cancellation policy",
    "Free shipping on orders over 3000৳",
  ],
};

// Shipping rates
const shippingRates = { inside: 100, outside: 60 };

export default function Order() {
  const [quantities, setQuantities] = useState({
    black: 0,
    chocolate: 0,
  });
  const [shippingMethod, setShippingMethod] = useState("inside");
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  // Update quantity for a specific variant
  const handleQuantityChange = (variant, change) => {
    setQuantities((prev) => ({
      ...prev,
      [variant]: Math.max(0, prev[variant] + change),
    }));
  };

  // Handle billing details input changes
  const handleBillingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calculate total price including shipping
  const subtotal = productData.variants.reduce((acc, variant) => {
    return acc + variant.price * quantities[variant.id];
  }, 0);
  const total = subtotal + shippingRates[shippingMethod];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here need to add api process the order
    console.log("Order submitted:", {
      quantities,
      shippingMethod,
      billingDetails,
      total,
    });
  };

  return (
    <div
      className="  border-2 border-black rounded-3xl shadow-2xl 
     p-4 sm:p-6  md:p-8 bg-[#F8F6F8]"
      style={{ boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.2)" }}
    >
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="mb-6    ">
          <h2
            data-aos="fade-up"
            className="rounded-2xl border-4 border-black bg-[#007F0A] py-3 text-center
          text-[24px]  sm:text-[32px]  font-bold text-white leading-8"
            style={{ boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.3)" }}
          >
            পছন্দের কালার অর্ডার করুন
          </h2>
        </div>

        <div data-aos="zoom-in-up">
          {/* Customer Notes */}
          <div className=" mb-6 md:mb-10 space-y-4 md:space-y-8 text-sm text-gray-600 font-[500]">
            {productData.notes.map((note, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheck size={16} color="#ee4f4f" strokeWidth={1.75} />
                <p>{note}</p>
              </div>
            ))}
          </div>

          {/* Product Selection */}
          <div className="mb-8 text-[#555555]">
            <h3 className="mb-5 text-lg font-bold leading-6">
              কালার সিলেক্ট করুনঃ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productData.variants.map((variant) => (
                <div
                  key={variant.id}
                  className="rounded-lg border p-2 sm:p-4 border-gray-300"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Image
                      src={variant.imageSrc}
                      alt={`${variant.name} Wallet`}
                      width={80}
                      height={80}
                      className="rounded-lg border border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="text-[12px] sm:text-[16px] font-semibold ">
                        {variant.name}
                      </h4>
                      <div className="mt-2 flex flex-col sm:flex-row md:items-center md:justify-center gap-2 sm:gap-4">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(variant.id, -1)}
                            className="flex h-5 w-5 sm:h-8 sm:w-8 items-center justify-center rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="0"
                            value={quantities[variant.id]}
                            onChange={(e) =>
                              setQuantities((prev) => ({
                                ...prev,
                                [variant.id]: Math.max(
                                  0,
                                  parseInt(e.target.value) || 0
                                ),
                              }))
                            }
                            className="h-5 sm:h-8 w-16 border border-gray-300 text-center text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(variant.id, 1)}
                            className="flex h-5 w-5 sm:h-8 sm:w-8 items-center justify-center rounded-r border border-l-0 border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-[10px] font-semibold ">
                          {variant.price.toFixed(2)}৳
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 text-[#333333]">
            {/* Billing Details */}
            <div>
              <h3 className="mb-5 font-semibold text-xl">BILLING DETAILS</h3>
              <div className="space-y-4">
                {[
                  { label: "আপনার নাম", name: "name", required: true },
                  {
                    label: "মোবাইল নাম্বার",
                    name: "mobile",
                    required: true,
                    type: "tel",
                  },
                  { label: "ঠিকানা লিখুন", name: "address", required: true },
                ].map(({ label, name, required, type = "text" }, index) => (
                  <div key={index}>
                    <label className="mb-1 block text-sm text-gray-600">
                      {label}
                      {required && (
                        <span className="text-[#E2260A] ml-1 text-lg">*</span>
                      )}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={billingDetails[name]}
                      onChange={handleBillingDetailsChange}
                      className="w-full rounded border border-gray-300 p-2 text-sm"
                      required={required}
                    />
                  </div>
                ))}
                <div>
                  <p className="text-[13px]">Country / Region</p>
                  <p className="text-[15px] font-bold">Bangladesh</p>
                </div>

                {/* Shipping Options */}
                <div className="mt-4">
                  <h4 className="mb-2 font-semibold text-xl">SHIPPING</h4>
                  <div className="space-y-2 border divide-y">
                    {Object.entries(shippingRates).map(([key, rate]) => (
                      <label
                        key={key}
                        className="flex items-center gap-2 px-4 py-3 text-[15px]"
                      >
                        <input
                          type="radio"
                          name="shipping"
                          value={key}
                          checked={shippingMethod === key}
                          onChange={() => setShippingMethod(key)}
                          className="h-4 w-4 border-gray-300 accent-[#F16334]"
                        />
                        <span>
                          {key === "inside" ? "Inside Dhaka" : "Outside Dhaka"}
                        </span>
                        <span className="ml-auto font-bold">
                          {rate.toFixed(2)}৳
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="mb-4 font-medium">YOUR ORDER</h3>
              <div className="rounded border border-gray-200 p-4">
                <div className="mb-4 flex justify-between border-b pb-4">
                  <span className="text-sm font-medium">Product</span>
                  <span className="text-sm font-medium">Subtotal</span>
                </div>
                <div className="divide-y">
                  {productData.variants.map((variant) => (
                    <div
                      key={variant.id}
                      className="flex justify-between text-sm gap-3 py-2"
                    >
                      <div className="flex gap-4">
                        <Image
                          src={variant.imageSrc}
                          alt={`${variant.name} Wallet`}
                          width={50}
                          height={50}
                          className="rounded-lg border border-gray-200"
                        />
                        <div className="flex flex-col">
                          <span>{variant.name}</span>
                          <span className="text-xs text-gray-500">
                            Quantity: {quantities[variant.id]}
                          </span>
                        </div>
                      </div>
                      <span>
                        {(variant.price * quantities[variant.id]).toFixed(2)}৳
                      </span>
                    </div>
                  ))}

                  {/* Shipping and Total */}
                  <div className=" flex justify-between text-sm text-[#555555] py-2">
                    <span>Shipping</span>
                    <span>{shippingRates[shippingMethod].toFixed(2)}৳</span>
                  </div>
                  <div className=" flex justify-between text-sm font-semibold text-[#555555] py-2">
                    <span>Total</span>
                    <span>{total.toFixed(2)}৳</span>
                  </div>
                  <div className="">
                    <h4 className=" pt-4 pb-4 text-[#F17248] flex items-center gap-2  border-b ">
                      <Play size={10} color="#F17146" />
                      Have a coupon?
                    </h4>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-4 text-sm text-gray-600">
                    Pay with cash upon delivery.
                  </p>
                  <button
                    type="submit"
                    className="w-full rounded bg-[#F17248] hover:bg-[#C65F3D] transition-colors duration-100 py-4 text-center text-white flex justify-center gap-2"
                  >
                    <LockKeyhole size={20} color="#ffff" strokeWidth={1.75} />
                    অর্ডার করুন {total.toFixed(2)}৳
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

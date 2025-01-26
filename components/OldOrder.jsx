"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { CircleCheck, LockKeyhole } from "lucide-react";

// Product data (variant details and notes)
const productData = {
  variants: [
    {
      id: "black",
      name: "ANON Leather Long Wallet LW104 (Black)",
      price: 1595,
      imageSrc: "/images/black.webp",
    },
    {
      id: "chocolate",
      name: "ANON Leather Long Wallet LW104 (Chocolate)",
      price: 1595,
      imageSrc: "/images/chocolate.webp",
    },
  ],
  notes: [
    "Customer must have Credit/Debit card to be covered by our order cancellation policy",
    "Free shipping on orders over 3000৳",
  ],
};

// Shipping rates
const shippingRates = { inside: 60, outside: 120 };

export default function Order() {
  const [selectedVariant, setSelectedVariant] = useState(
    productData.variants[0].id
  );
  const [quantities, setQuantities] = useState({
    black: 0,
    chocolate: 0,
  });
  const [shippingMethod, setShippingMethod] = useState("inside");

  // Update quantity for a specific variant
  const handleQuantityChange = (variant, change) => {
    setQuantities((prev) => ({
      ...prev,
      [variant]: Math.max(0, prev[variant] + change),
    }));
  };

  // Calculate total price including shipping
  const total = useMemo(() => {
    const subtotal = productData.variants.reduce((acc, variant) => {
      return acc + variant.price * quantities[variant.id];
    }, 0);
    return subtotal + shippingRates[shippingMethod];
  }, [quantities, shippingMethod]);

  // Render variant selection
  const renderVariantSelection = (variant) => (
    <div
      key={variant.id}
      className={`rounded-lg border p-4 ${
        selectedVariant === variant.id ? "border-gray-400" : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-4">
        <input
          type="radio"
          name="variant"
          value={variant.id}
          checked={selectedVariant === variant.id}
          onChange={() => setSelectedVariant(variant.id)}
          className="border-gray-300 w-4 h-4 accent-[#F16334]"
        />
        <Image
          src={variant.imageSrc}
          alt={`${variant.name} Wallet`}
          width={80}
          height={80}
          className="border-gray-200 border rounded-lg"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-[16px] leading-7">
            {variant.name}
          </h4>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(variant.id, -1)}
                className="flex justify-center items-center border-gray-300 bg-gray-50 hover:bg-gray-100 border border-r-0 rounded-l w-8 h-8 text-gray-600"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantities[variant.id]}
                onChange={(e) =>
                  setQuantities((prev) => ({
                    ...prev,
                    [variant.id]: Math.max(1, parseInt(e.target.value) || 1),
                  }))
                }
                className="border-gray-300 border w-16 h-8 text-center text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [appearance:textfield]"
              />
              <button
                onClick={() => handleQuantityChange(variant.id, 1)}
                className="flex justify-center items-center border-gray-300 bg-gray-50 hover:bg-gray-100 border border-l-0 rounded-r w-8 h-8 text-gray-600"
              >
                +
              </button>
            </div>
            <span className="font-semibold text-sm">
              {variant.price.toFixed(2)}৳
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2
          className="border-4 bg-[#007F0A] py-3 border-black rounded-2xl font-bold text-[32px] text-center text-white leading-8"
          style={{ boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.3)" }}
        >
          পছন্দের কালার অর্ডার করুন
        </h2>
      </div>

      {/* Customer Notes */}
      <div className="space-y-8 mb-10 font-[500] text-gray-600 text-sm">
        {productData.notes.map((note, index) => (
          <div key={index} className="flex items-center gap-2">
            <CircleCheck size={16} color="#ee4f4f" strokeWidth={1.75} />
            <p>{note}</p>
          </div>
        ))}
      </div>

      {/* Product Selection */}
      <div className="mb-8 text-[#555555]">
        <h3 className="mb-5 font-bold text-lg leading-6">
          কালার সিলেক্ট করুনঃ
        </h3>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          {productData.variants.map(renderVariantSelection)}
        </div>
      </div>

      <div className="gap-6 grid md:grid-cols-2 text-[#333333]">
        {/* Billing Details */}
        <div>
          <h3 className="mb-5 font-semibold text-xl">BILLING DETAILS</h3>
          <div className="space-y-4">
            {[
              { label: "আপনার নাম", required: true },
              { label: "মোবাইল নাম্বার", required: true, type: "tel" },
              { label: "ঠিকানা লিখুন", required: true },
            ].map(({ label, required, type = "text" }, index) => (
              <div key={index}>
                <label className="block mb-1 text-gray-600 text-sm">
                  {label}
                  {required && (
                    <span className="ml-1 text-[#E2260A] text-lg">*</span>
                  )}
                </label>
                <input
                  type={type}
                  className="border-gray-300 p-2 border rounded w-full text-sm"
                  required={required}
                />
              </div>
            ))}
            <div>
              <p className="text-[13px]">Country / Region</p>
              <p className="font-bold text-[15px]">Bangladesh</p>
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
                      className="border-gray-300 w-4 h-4 accent-[#F16334]"
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
          <div className="border-gray-200 p-4 border rounded">
            <div className="flex justify-between mb-4 pb-4 border-b">
              <span className="font-medium text-sm">Product</span>
              <span className="font-medium text-sm">Subtotal</span>
            </div>
            <div className="divide-y">
              {productData.variants.map((variant) => (
                <div
                  key={variant.id}
                  className="flex justify-between gap-3 py-2 text-sm"
                >
                  <div className="flex gap-4">
                    <Image
                      src={variant.imageSrc}
                      alt={`${variant.name} Wallet`}
                      width={50}
                      height={50}
                      className="border-gray-200 border rounded-lg"
                    />
                    <div className="flex flex-col">
                      <span>{variant.name}</span>
                      <span className="text-gray-500 text-xs">
                        Quantity: {quantities[variant.id]}
                      </span>
                    </div>
                  </div>
                  <span>
                    {(variant.price * quantities[variant.id]).toFixed(2)}৳
                  </span>
                </div>
              ))}
            </div>

            {/* Shipping and Total */}
            <div className="flex justify-between mt-6 font-bold text-[#555555] text-lg">
              <span>Shipping</span>
              <span>{shippingRates[shippingMethod].toFixed(2)}৳</span>
            </div>
            <div className="flex justify-between mt-6 font-bold text-[#555555] text-lg">
              <span>Total</span>
              <span>{total.toFixed(2)}৳</span>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-8">
            <button className="flex justify-center items-center gap-2 bg-[#F16334] py-4 rounded-lg w-full font-semibold text-lg text-white">
              <LockKeyhole className="mr-2" />
              PLACE ORDER
            </button>
            <p className="mt-2 text-center text-gray-500 text-xs">
              Your personal data will be used to process your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

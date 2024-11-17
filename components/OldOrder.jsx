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
const shippingRates = { inside: 150, outside: 80 };

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
          className="h-4 w-4 border-gray-300 accent-[#F16334]"
        />
        <Image
          src={variant.imageSrc}
          alt={`${variant.name} Wallet`}
          width={80}
          height={80}
          className="rounded-lg border border-gray-200"
        />
        <div className="flex-1">
          <h4 className="text-[16px] font-semibold leading-7">
            {variant.name}
          </h4>
          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(variant.id, -1)}
                className="flex h-8 w-8 items-center justify-center rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100"
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
                className="h-8 w-16 border border-gray-300 text-center text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                onClick={() => handleQuantityChange(variant.id, 1)}
                className="flex h-8 w-8 items-center justify-center rounded-r border border-l-0 border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <span className="text-sm font-semibold">
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
          className="rounded-2xl border-4 border-black bg-[#007F0A] py-3 text-center text-[32px] font-bold text-white leading-8"
          style={{ boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.3)" }}
        >
          পছন্দের কালার অর্ডার করুন
        </h2>
      </div>

      {/* Customer Notes */}
      <div className="mb-10 space-y-8 text-sm text-gray-600 font-[500]">
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
          {productData.variants.map(renderVariantSelection)}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 text-[#333333]">
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
                <label className="mb-1 block text-sm text-gray-600">
                  {label}
                  {required && (
                    <span className="text-[#E2260A] ml-1 text-lg">*</span>
                  )}
                </label>
                <input
                  type={type}
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
            </div>

            {/* Shipping and Total */}
            <div className="mt-6 flex justify-between text-lg font-bold text-[#555555]">
              <span>Shipping</span>
              <span>{shippingRates[shippingMethod].toFixed(2)}৳</span>
            </div>
            <div className="mt-6 flex justify-between text-lg font-bold text-[#555555]">
              <span>Total</span>
              <span>{total.toFixed(2)}৳</span>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-8">
            <button className="w-full rounded-lg bg-[#F16334] py-4 text-white font-semibold text-lg flex items-center justify-center gap-2">
              <LockKeyhole className="mr-2" />
              PLACE ORDER
            </button>
            <p className="mt-2 text-xs text-gray-500 text-center">
              Your personal data will be used to process your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

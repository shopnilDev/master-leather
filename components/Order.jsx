"use client";

import * as React from "react";
import Image from "next/image";
import { CircleCheck, LockKeyhole } from "lucide-react";

const SHIPPING_RATES = {
  inside: 100,
  outside: 60,
};

export default function Order({ color_variations }) {
  console.log("from order", color_variations);

  const [quantities, setQuantities] = React.useState({});
  const [formData, setFormData] = React.useState({
    name: "",
    mobile: "",
    address: "",
    shipping: "inside",
  });

  const subtotal = React.useMemo(() => {
    return color_variations?.reduce((total, item) => {
      return (
        total +
        Number.parseFloat(item.color_price) * (quantities[item.color] || 0)
      );
    }, 0);
  }, [color_variations, quantities]);

  const total = subtotal + SHIPPING_RATES[formData.shipping];
  const isFreeShipping = subtotal >= 3000;

  function handleSubmit(e) {
    e.preventDefault();
    const orderData = {
      items: color_variations
        .filter((item) => quantities[item.color] > 0)
        .map((item) => ({
          title: item.color_title,
          color: item.color,
          quantity: quantities[item.color],
          price: item.color_price,
          subtotal:
            quantities[item.color] * Number.parseFloat(item.color_price),
        })),
      shipping: {
        method: formData.shipping,
        cost: isFreeShipping ? 0 : SHIPPING_RATES[formData.shipping],
      },
      billing: formData,
      total: isFreeShipping ? subtotal : total,
    };
    console.log("Order submitted:", orderData);
  }

  return (
    <div className="border-2 border-black rounded-md shadow-2xl p-6 bg-[#F8F6F8]">
      <form onSubmit={handleSubmit} className="space-y-8">
        <header>
          <h1 className="rounded-md border-4 border-black bg-[#007F0A] py-3 text-center text-[24px] sm:text-[32px] font-bold text-white">
            পছন্দের কালার অর্ডার করুন
          </h1>
          <div className="mt-6 space-y-4 text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <CircleCheck className="text-[#ee4f4f]" size={16} />
              <p>Free shipping on orders over 3000৳</p>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="text-[#ee4f4f]" size={16} />
              <p>
                Customer must have Credit/Debit card to be covered by our order
                cancellation policy
              </p>
            </div>
          </div>
        </header>

        <section>
          <h2 className="mb-4 text-lg font-bold">কালার সিলেক্ট করুনঃ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {color_variations?.map((variant) => (
              <div key={variant.color} className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={"/placeholder.svg"}
                    alt={variant.color_title}
                    width={80}
                    height={80}
                    className="rounded-lg border border-gray-200 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-base font-semibold">
                      {variant.color_title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantities((prev) => ({
                              ...prev,
                              [variant.color]: Math.max(
                                0,
                                (prev[variant.color] || 0) - 1
                              ),
                            }))
                          }
                          className="h-8 w-8 rounded-l border border-gray-300 bg-gray-50 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="0"
                          value={quantities[variant.color] || 0}
                          onChange={(e) =>
                            setQuantities((prev) => ({
                              ...prev,
                              [variant.color]: Math.max(
                                0,
                                Number.parseInt(e.target.value) || 0
                              ),
                            }))
                          }
                          className="w-16 text-center border-y border-gray-300"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setQuantities((prev) => ({
                              ...prev,
                              [variant.color]: (prev[variant.color] || 0) + 1,
                            }))
                          }
                          className="h-8 w-8 rounded-r border border-gray-300 bg-gray-50 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        {Number.parseFloat(variant.color_price).toFixed(2)}৳
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section>
            <h2 className="mb-5 text-xl font-semibold">BILLING DETAILS</h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium"
                >
                  আপনার নাম
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full border rounded p-2 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block mb-1 text-sm font-medium"
                >
                  মোবাইল নাম্বার
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, mobile: e.target.value }))
                  }
                  required
                  className="w-full border rounded p-2 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-1 text-sm font-medium"
                >
                  ঠিকানা লিখুন
                </label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  required
                  className="w-full border rounded p-2 text-sm"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-2 font-semibold text-lg">SHIPPING</h3>
              <div className="space-y-2">
                {Object.entries(SHIPPING_RATES).map(([key, rate]) => (
                  <label key={key} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      checked={formData.shipping === key}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, shipping: key }))
                      }
                      className="h-4 w-4"
                    />
                    {key === "inside" ? "Inside Dhaka" : "Outside Dhaka"}
                    <span className="ml-auto font-bold">
                      {isFreeShipping ? "Free" : `${rate.toFixed(2)}৳`}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold">YOUR ORDER</h2>
            <div className="border rounded p-4">
              <div className="mb-4 flex justify-between border-b pb-4">
                <span className="font-medium">Product</span>
                <span className="font-medium">Subtotal</span>
              </div>
              {color_variations?.map(
                (variant) =>
                  (quantities[variant.color] || 0) > 0 && (
                    <div
                      key={variant.color}
                      className="flex justify-between text-sm mb-2"
                    >
                      <span>
                        {variant.color_title} × {quantities[variant.color]}
                      </span>
                      <span>
                        {(
                          Number.parseFloat(variant.color_price) *
                          (quantities[variant.color] || 0)
                        ).toFixed(2)}
                        ৳
                      </span>
                    </div>
                  )
              )}
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>
                  {isFreeShipping
                    ? "Free"
                    : `${SHIPPING_RATES[formData.shipping].toFixed(2)}৳`}
                </span>
              </div>
              <div className="mt-4 flex justify-between font-semibold text-lg border-t pt-4">
                <span>Total</span>
                <span>{(isFreeShipping ? subtotal : total).toFixed(2)}৳</span>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-[#F17248] hover:bg-[#C65F3D] text-white py-2 rounded flex items-center justify-center gap-2"
              >
                <LockKeyhole size={20} />
                অর্ডার করুন
              </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
}
